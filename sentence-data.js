// Sentence pattern practice — fill in the Japanese sentence for the given English meaning.
// Sentences use verbs from vocab-data.js, grouped loosely by grammar pattern (pattern is just
// a label for reference, not used by the game logic).
window.SENTENCE_PRACTICE = [
  // ~のが好きです (dictionary form) — "I like doing ~"
  {pattern:"のが好きです", en:"I like swimming.", jp:"泳ぐのが好きです。"},
  {pattern:"のが好きです", en:"I like cooking.", jp:"りょうりするのが好きです。"},
  {pattern:"のが好きです", en:"I like walking.", jp:"歩くのが好きです。"},
  {pattern:"のが好きです", en:"I like taking photos.", jp:"写真を撮るのが好きです。"},

  // ~つもりです (dictionary form) — "I plan to / intend to ~"
  {pattern:"つもりです", en:"I plan to travel next year.", jp:"来年、旅行するつもりです。"},
  {pattern:"つもりです", en:"I plan to clean my room this weekend.", jp:"週末に部屋を掃除するつもりです。"},
  {pattern:"つもりです", en:"The two of them plan to get married next year.", jp:"二人は来年結婚するつもりです。"},
  {pattern:"つもりです", en:"I plan to graduate this year.", jp:"今年卒業するつもりです。"},

  // ~前に (dictionary form) — "before doing ~"
  {pattern:"前に", en:"Before eating, I wash my hands.", jp:"食べる前に、手を洗います。"},
  {pattern:"前に", en:"Before going out, I lock the door.", jp:"出かける前に、かぎをかけます。"},
  {pattern:"前に", en:"Before going home, I'll meet my friend.", jp:"帰る前に、友達に会います。"},
  {pattern:"前に", en:"Before cleaning, I open the windows.", jp:"掃除する前に、窓を開けます。"},

  // ~ましょうか (ます stem) — "Shall we ~?"
  {pattern:"ましょうか", en:"Shall we watch a movie?", jp:"映画を見ましょうか。"},
  {pattern:"ましょうか", en:"Shall we eat lunch?", jp:"昼ご飯を食べましょうか。"},
  {pattern:"ましょうか", en:"Shall we go out?", jp:"出かけましょうか。"},
  {pattern:"ましょうか", en:"Shall we clean the room?", jp:"部屋を掃除しましょうか。"},

  // plain ます form — polite present/future statement
  {pattern:"ます form", en:"I walk every day.", jp:"毎日、歩きます。"},
  {pattern:"ます form", en:"I will travel tomorrow.", jp:"明日、旅行します。"},
  {pattern:"ます form", en:"I do laundry on weekends.", jp:"週末に洗濯します。"},
  {pattern:"ます form", en:"I welcome my friend into my home.", jp:"友達を家に迎えます。"},

  // ~たいです (ます stem) — "I want to ~"
  {pattern:"たいです", en:"I want to go to Japan.", jp:"日本に行きたいです。"},
  {pattern:"たいです", en:"I want to buy a new car.", jp:"新しい車を買いたいです。"},
  {pattern:"たいです", en:"I want to memorize kanji.", jp:"漢字を覚えたいです。"},
  {pattern:"たいです", en:"I want to invite my friend.", jp:"友達を誘いたいです。"},

  // ~すぎました (ます stem) — "did too much of ~"
  {pattern:"すぎました", en:"I ate too much yesterday.", jp:"昨日、食べすぎました。"},
  {pattern:"すぎました", en:"I drank too much alcohol.", jp:"お酒を飲みすぎました。"},
  {pattern:"すぎました", en:"I walked too much today.", jp:"今日は歩きすぎました。"},
  {pattern:"すぎました", en:"I worked too much last night.", jp:"昨夜、働きすぎました。"},

  // て form + ください — "please do ~"
  {pattern:"てください", en:"Please open the door.", jp:"ドアを開けてください。"},
  {pattern:"てください", en:"Please close the window.", jp:"窓を閉めてください。"},
  {pattern:"てください", en:"Please help me.", jp:"手伝ってください。"},
  {pattern:"てください", en:"Please sit here.", jp:"ここに座ってください。"},

  // て form + いただけませんか — polite request "could you please ~"
  {pattern:"ていただけませんか", en:"Could you please help me?", jp:"手伝っていただけませんか。"},
  {pattern:"ていただけませんか", en:"Could you please open the window?", jp:"窓を開けていただけませんか。"},
  {pattern:"ていただけませんか", en:"Could you please say that again?", jp:"もう一度話していただけませんか。"},
  {pattern:"ていただけませんか", en:"Could you please lend it to me?", jp:"貸していただけませんか。"},

  // て form + もいいですか — "may I ~?"
  {pattern:"てもいいですか", en:"May I sit here?", jp:"ここに座ってもいいですか。"},
  {pattern:"てもいいですか", en:"May I use this?", jp:"これを使ってもいいですか。"},
  {pattern:"てもいいですか", en:"May I take a photo?", jp:"写真を撮ってもいいですか。"},
  {pattern:"てもいいですか", en:"May I turn on the TV?", jp:"テレビをつけてもいいですか。"},

  // て form + います — ongoing / habitual action
  {pattern:"ています", en:"I am cleaning now.", jp:"今、掃除しています。"},
  {pattern:"ています", en:"I work at a bank.", jp:"銀行で働いています。"},
  {pattern:"ています", en:"I am on the phone now.", jp:"今、電話しています。"},
  {pattern:"ています", en:"I walk in the park every morning.", jp:"毎朝、公園を歩いています。"},

  // て form + いました — past progressive
  {pattern:"ていました", en:"I was watching TV last night.", jp:"昨日の夜、テレビを見ていました。"},
  {pattern:"ていました", en:"I was cleaning my room at that time.", jp:"その時、部屋を掃除していました。"},
  {pattern:"ていました", en:"I used to swim a lot as a child.", jp:"子供の時、よく泳いでいました。"},
  {pattern:"ていました", en:"I was talking with her.", jp:"彼女と話していました。"},

  // まだ〜ていません — "haven't done ~ yet"
  {pattern:"まだ〜ていません", en:"I haven't cleaned yet.", jp:"まだ掃除していません。"},
  {pattern:"まだ〜ていません", en:"I haven't eaten yet.", jp:"まだ食べていません。"},
  {pattern:"まだ〜ていません", en:"I haven't graduated yet.", jp:"まだ卒業していません。"},
  {pattern:"まだ〜ていません", en:"I haven't gotten married yet.", jp:"まだ結婚していません。"},

  // て form as connector — "I'll do X, then Y"
  {pattern:"て (connector)", en:"I'll eat breakfast, then go to school.", jp:"朝ご飯を食べて、学校に行きます。"},
  {pattern:"て (connector)", en:"I'll wash my hands, then eat.", jp:"手を洗って、食べます。"},
  {pattern:"て (connector)", en:"I'll clean, then do laundry.", jp:"掃除して、洗濯します。"},
  {pattern:"て (connector)", en:"I'll call my friend, then go out.", jp:"友達に電話して、出かけます。"}
];
