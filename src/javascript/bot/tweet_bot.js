/*
    同じ内容をつぶやくと「Status is a duplicate」というエラーが出るので、
    Botを作る場合は、少し中身を変えないといけない。
 */

var twitter = require('twitter');
var client = new twitter({
    consumer_key:        'Input Your Consumer Key',
    consumer_secret:     'Input Your Consumer Secret Key',
    access_token_key:    'Input Your Access Token Key',
    access_token_secret: 'Input Your Access Token Secret Key'
});

var count = 0;

/*
    setIntervalによって遅延を発生させることができる。
    10000ms = 10sのことである。
 */
setInterval(function(){ postTweet() },10000);

function postTweet() {
    count++;
    var params = {
        status: count + '番目\nI am a tweet'
    };
    client.post('statuses/update', params, function(error, tweet, response) {
        if (!error) {
            /*
                ターミナル上にコンソールの表示
                実際に投稿された内容やそれに対するパラメータなどが表示される。
             */
            console.log(tweet.created_at);
            console.log(tweet.text);
            console.log('\n');
        }
        else {
            console.log(error);
        }
    });
}