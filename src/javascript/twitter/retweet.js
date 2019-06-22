/*
    Twitterにてリツイートを行う。
    実際に投稿できたかどうかを確認するには、Twitterにアクセスしてください。
    (URL: https://twitter.com/)

    customer_key, customer_secret, access_token_key, access_token_secret は
    ご自身のトークンキーを入れてください。
 */

var twitter = require('twitter');
var client = new twitter({
    consumer_key:        'Input Your Consumer Key',
    consumer_secret:     'Input Your Consumer Secret Key',
    access_token_key:    'Input Your Access Token Key',
    access_token_secret: 'Input Your Access Token Secret Key'
});

postReTweet();

function postReTweet() {

    /*
       tweetIdを指定することで特定のツイートを
       リツイートすることができる。
     */
    var tweetId = 'Input tweetId';

    client.post('statuses/retweet/' + tweetId, function(error, tweet, response) {
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