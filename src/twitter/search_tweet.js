/*
    ターミナル（windowsの場合はコマンドプロンプト）上にて、
    検索したいキーワード（クエリ）を指定することで、
    キーワードを含んだツイートを取得できる。

    customer_key, customer_secret, access_token_key, access_token_secret は
    ご自身のトークンキーを入れてください。
 */


var twitter = require('twitter');
var client = new twitter({
    consumer_key:        'Input Your Customer Key',
    consumer_secret:     'Input Your Customer Secret Key',
    access_token_key:    'Input Your Access Token Key',
    access_token_secret: 'Input Your Access Token Secret Key'
});

searchTweet();

function searchTweet() {
    var params = {
        q: 'Node.js',
        lang: 'ja',
        count: 10
    };
    client.get('search/tweets', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.statuses.length; i++) {
                console.log(tweets.statuses[i].text + '\n');
            }
        }
            else{
                console.log(error);
            }
    });
}