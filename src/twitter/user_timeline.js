/*
    ターミナル（windowsの場合はコマンドプロンプト）上で、
    screen_nameパラメータや user_idパラメータで指定した
    ユーザーが投稿した最新のツイート集を取得。

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

getTweet();

function getTweet() {
    var params = {
        screen_name: 'Twitter',
        count: 10,
        include_rts: false,
        exclude_replies: true
    };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
            }
        } else {
            console.log(error);
        }
    });
}