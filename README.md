# 🃏Blackjack Pro
Bu kod bir kumar oyunu olan "Blackjack" oyununu simüle eder ve Telegram botu aracılığıyla oynanabilir hale getirir.

İlk olarak, node-telegram-bot-api modülü kullanarak bir Telegram botu oluşturulur ve BOT_TOKEN değişkeni aracılığıyla botun kimliği belirtilir.

Sonrasında, createDeck() fonksiyonu, oyun kartlarının bir deste halinde oluşturulmasını sağlar ve dealCards() fonksiyonu, oyun başladığında kartların dağıtılmasını gerçekleştirir.

hit() fonksiyonu, oyuncunun yeni bir kart çekmesini sağlar.

stand() fonksiyonu, oyuncunun kart çekmeyi bırakmasını ve oyunun sonuçlarını belirlemeyi sağlar. Bu fonksiyonda, bayın kartlarındaki toplam değeri 17'den küçük olduğu sürece, bay yeni bir kart çeker. Oyuncunun ve bayın kartlarının toplam değerleri karşılaştırılır ve kazanan belirlenir.

getCardTotal() fonksiyonu, oyuncunun veya bayın kartlarının toplam değerini hesaplar. Bu fonksiyon, her bir kartın değerini hesaplar ve As'ların özel koşullarını da kontrol eder.

Son olarak, bot.onText() fonksiyonu, kullanıcının "/stand" komutunu göndermesi durumunda stand() fonksiyonunu tetikler ve sonucu mesaj olarak gönderir.

Bu kod, bir Telegram botu kullanarak Blackjack oynamak isteyenler için temel bir şablon sunar ve oyun mekaniğini içeren bir örnek sağlar. Ancak, gerçek bir kumar oyunu olduğundan, yasal ve etik sınırların göz önünde bulundurulması önemlidir.

# 💬Contact Me
Telegram • https://t.me/sukruefedilekli
