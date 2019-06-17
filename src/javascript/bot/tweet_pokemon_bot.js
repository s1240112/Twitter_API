var twitter = require('twitter');
var client = new twitter({
    consumer_key:        'Input Your Customer Key',
    consumer_secret:     'Input Your Customer Secret Key',
    access_token_key:    'Input Your Access Token Key',
    access_token_secret: 'Input Your Access Token Secret Key'
});

var pokemon = [
    'フシギダネ', 'フシギソウ', 'フシギバナ', 'ヒトカゲ', 'リザード',
    'リザードン', 'ゼニガメ', 'カメール', 'カメックス', 'キャタピー',
    'トランセル', 'バタフリー', 'ビードル', 'コクーン', 'スピアー',
    'ポッポ', 'ピジョン', 'ピジョット', 'コラッタ', 'ラッタ',
    'オニスズメ', 'オニドリル', 'アーボ', 'アーボック', 'ピカチュウ',
    'ライチュウ', 'サンド', 'サンドパン', 'ニドラン♀', 'ニドリーナ',
    'ニドクイン', 'ニドラン♂', 'ニドリーノ', 'ニドキング', 'ピッピ',
    'ピクシー', 'ロコン', 'キュウコン', 'プリン', 'プクリン',
    'ズバット', 'ゴルバット', 'ナゾノクサ', 'クサイハナ', 'ラフレシア',
    'パラス', 'パラセクト', 'コンパン', 'モルフォン', 'ディグダ',
    'ダグトリオ', 'ニャース', 'ペルシアン', 'コダック', 'ゴルダック',
    'マンキー', 'オコリザル', 'ガーディ', 'ウインディ', 'ニョロモ',
    'ニョロゾ', 'ニョロボン', 'ケーシィ', 'ユンゲラー', 'フーディン',
    'ワンリキー', 'ゴーリキー', 'カイリキー', 'マダツボミ', 'ウツドン',
    'ウツボット', 'メノクラゲ', 'ドククラゲ', 'イシツブテ', 'ゴローン',
    'ゴローニャ', 'ポニータ', 'ギャロップ', 'ヤドン', 'ヤドラン',
    'コイル', 'レアコイル', 'カモネギ', 'ドードー', 'ドードリオ',
    'パウワウ', 'ジュゴン', 'ベトベター', 'ベトベトン', 'シェルダー',
    'パルシェン', 'ゴース', 'ゴースト', 'ゲンガー', 'イワーク',
    'スリープ', 'スリーパー', 'クラブ', 'キングラー', 'ビリリダマ',
    'マルマイン', 'タマタマ', 'ナッシー', 'カラカラ', 'ガラガラ',
    'サワムラー', 'エビワラー', 'ベロリンガ', 'ドガース', 'マタドガス',
    'サイホーン', 'サイドン', 'ラッキー', 'モンジャラ', 'ガルーラ',
    'タッツー', 'シードラ', 'トサキント', 'アズマオウ', 'ヒトデマン',
    'スターミー', 'バリヤード', 'ストライク', 'ルージュラ', 'エレブー',
    'ブーバー', 'カイロス', 'ケンタロス', 'コイキング', 'ギャラドス',
    'ラプラス', 'メタモン', 'イーブイ', 'シャワーズ', 'サンダース',
    'ブースター', 'ポリゴン', 'オムナイト', 'オムスター', 'カブト',
    'カブトプス', 'プテラ', 'カビゴン', 'フリーザー', 'サンダー',
    'ファイヤー', 'ミニリュウ', 'ハクリュウ', 'カイリュー', 'ミュウツー',
    'ミュウ'
];

var min = 0;
var max = 150;
var tmp = -1;

setInterval(function(){

    var number = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    if(number === tmp) {
        if (number === min) number++;
        else if (number === max) number--;
        else{
            if( (Math.floor( Math.random() * 2 )  ) % 2 === 0 ){
                number++;
            }
            else number--;
        }
    }

    postTweet(pokemon[number], number);
    tmp = number;

},10000);

function postTweet(pokemon, number) {
    var params = {
        status: 'No.' + (number+1) + '　名前：' + pokemon
    };
    client.post('statuses/update', params, function(error, tweet, response) {
        if (!error) {
            console.log(tweet.created_at);
            console.log(tweet.text);
            console.log('\n');
        }
        else {
            console.log(error);
        }
    });
}