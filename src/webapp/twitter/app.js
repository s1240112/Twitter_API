var express = require('express');
var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

var ejs = require('ejs');
app.engine('ejs',ejs.renderFile);

/*
    twitter-apiの初期化
 */
var twitter = require('twitter');
var client = new twitter({
    consumer_key:        'Input Your Customer Key',
    consumer_secret:     'Input Your Customer Secret Key',
    access_token_key:    'Input Your Access Token Key',
    access_token_secret: 'Input Your Access Token Secret Key'
});

/*
    ホーム画面に遷移する。
 */
app.all('/', function(req, res){
    res.render('index.ejs',
        {   title : 'Express + EJS' ,
            content: 'Twitter API を利用してインターフェースを開発しよう！'});
});

/*
    特定のキーワードを入力し、Twitterの投稿を表示する。
 */
app.post('/show_tweet', function(req,res){

    /*
        パラメーターの設定
     */
    var params = {
        q: req.body.keyword,
        lang: 'ja',
        count: 100
    };

    var tweet = new Array();
    var hit_count = 0;

    client.get('search/tweets', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.statuses.length; i++) {
                console.log(tweets.statuses[i].text + '\n');
                tweet[i] = tweets.statuses[i].text;
                hit_count++;
            }
        }
        else{
            console.log(error);
            tweet[0] = error;
        }

        res.render('view_tweet.ejs',
            {   title : 'View_Tweet' ,
                content: req.body.keyword + 'の検索結果！',
                tweet: tweet,
                hit_count : hit_count
            })
    });
})

/*
    文章を入力し、Twitterへ投稿する。
 */
app.post('/upload_tweet', function(req,res){

    /*
        パラメーターの設定
    */
    var params = {
        status: req.body.tweet_area
    };

    client.post('statuses/update', params, function(error, tweet, response) {
        if (!error) {

            console.log(tweet);
        }
        else {
            console.log(error);
        }

        res.render('upload_tweet.ejs',
            {   title : 'Upload_Tweet' ,
                content: 'Twitterに以下の文章がアップロードされました。',
                tweet: tweet,
                length: tweet.text.length
            })
    });

})

/*
    サーバーを起動する。
 */
var server = app.listen(8000, function(){
    console.log('Server is running!');
})