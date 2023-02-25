const TelegramBot = require('node-telegram-bot-api');
const token = 'BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

let deck = [];
let dealer = [];
let player = [];
let gameStarted = false;

function createDeck() {
    let deck = [];
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    for (let suit in suits) {
      for (let value in values) {
        deck.push(values[value] + ' of ' + suits[suit]);
      }
    }
    return deck;
  }

function dealCards() {
    dealer = [];
    player = [];
    for (let i = 0; i < 2; i++) {
      player.push(deck.pop());
      dealer.push(deck.pop());
    }
  }
  
function hit() {
    player.push(deck.pop());
  }
  
function stand() {
    gameStarted = false;
    let dealerTotal = getCardTotal(dealer);
    while (dealerTotal < 17) {
      dealer.push(deck.pop());
      dealerTotal = getCardTotal(dealer);
    }
    let playerTotal = getCardTotal(player);
    let message = '';
    if (dealerTotal > 21) {
      message = 'Bay battı. Kazandın!';
    } else if (playerTotal > dealerTotal) {
      message = 'Kazandın!';
    } else if (playerTotal < dealerTotal) {
      message = 'Kaybettin.';
    } else {
      message = 'Berabere kaldınız.';
    }
    bot.sendMessage(chatId, `Oyuncunun kartları: ${player.join(', ')}\nBayın kartları: ${dealer.join(', ')}\n\n${message}`);
  }

function getCardTotal(cards) {
    let total = 0;
    let aceCount = 0;
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];
      let cardValue = card.substring(0, card.indexOf(' '));
      if (cardValue === 'A') {
        aceCount++;
        total += 11;
      } else if (cardValue === 'K' || cardValue === 'Q' || cardValue === 'J') {
        total += 10;
      } else {
        total += parseInt(cardValue);
      }
    }
    while (aceCount > 0 && total > 21) {
      total -= 10;
      aceCount--;
    }
    return total;
  }

bot.onText(/stand/, (msg) => {
    if (!gameStarted) {
      bot.sendMessage(chatId, 'Oyun başlamadı. Lütfen "/startgame" komutuyla oyunu başlatın.');
      return;
    }
    stand();
});
  
  
  
