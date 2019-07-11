var express = require('express');
var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

var ejs = require('ejs');
app.engine('ejs',ejs.renderFile);

/*
    twitter-api api-keyの初期化
 */
var twitter = require('twitter');
var client = new twitter({
    consumer_key:        'Input Your Consumer Key',
    consumer_secret:     'Input Your Consumer Secret Key',
    access_token_key:    'Input Your Access Token Key',
    access_token_secret: 'Input Your Access Token Secret Key'
});

/*
    ホーム画面に移動する。
 */
app.all('/', function(req, res){
    res.render('index.ejs',
        {   title : 'Express + EJS' ,
            content: 'Twitter API を利用してインターフェースを開発しよう！'});
});

/*
    特定のキーワードを入力し、Twitterの投稿を表示する。
 */
app.post('/search_tweet', function(req,res){

    /*
        パラメーターの設定
     */
    var params = {
        q: req.body.keyword,
        lang: 'ja',
        count: 100,
        include_entities: true
    };

    var tweet = new Array();
    var hit_count = 0;

    client.get('search/tweets', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.statuses.length; i++) {
                console.log(tweets.statuses[i].created_at);
                console.log(tweets.statuses[i].text + '\n');
                tweet[i] = tweets.statuses[i].text;
                hit_count++;
            }
        }
        else{
            console.log(error);
            tweet[0] = error;
        }

        res.render('search_tweet.ejs',
            {   title : 'Twitter-API search/tweetsを実行した結果' ,
                content: req.body.keyword + 'の検索結果！',
                tweet: tweet,
                hit_count : hit_count
            })
    });
})


/*
    ユーザーIDかスクリーンネームを入力してお気に入りのツイートを取得する。
 */
app.post('/favorites_tweet', function(req,res){

    /*
        パラメーターの設定（ユーザーIDが入力された場合）
    */
    var params = {
        screen_name: req.body.target,
        count: 20,
        include_entities: true
    };

    var tweet = new Array();
    var hit_count = 0;

    client.get('favorites/list', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text + '\n');
                tweet[i] = tweets[i].text;
                hit_count++;
            }
        }
        else{
            console.log(error);
            tweet[0] = error;
        }

        res.render('favorites_tweet.ejs',
            {   title : 'Twitter-API favorites/listを実行した結果' ,
                content: req.body.target + 'の検索結果！',
                tweet: tweet,
                hit_count : hit_count
            })
    });
})


/*
    文章を入力し、Twitterへ投稿する。
 */
app.post('/post_tweet', function(req,res){

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

        res.render('post_tweet.ejs',
            {   title : 'Twitter-API statuses/updateを実行した結果' ,
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