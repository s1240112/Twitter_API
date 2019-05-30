/*
    Twitterにツイートを投稿する。(ツイートの内容。URLアドレスやハッシュタグには、自動でリンクが貼られます。)
    実際に投稿できたかどうかを確認するには、Twitterにアクセスしてください。
    (URL: https://twitter.com/)

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

postTweet();

function postTweet() {
    var params = {
        status: 'I am a tweet\n#TEST'
    };
    client.post('statuses/update', params, function(error, tweet, response) {
        if (!error) {
            /*
                ターミナル上にコンソールの表示
                実際に投稿された内容やそれに対するパラメータなどが表示される。
             */
            console.log(tweet);
        }
        else {
            console.log(error);
        }
    });
}