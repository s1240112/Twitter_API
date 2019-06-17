# Twitter_API

### Twitter-API API-Keyの取得方法
Twitter-APIの取得方法については、documentフォルダーの中に資料を入れておきましたのでそこから作って下さい。

### Intellijでのコマンドについて
NodeJSを利用する上で、javascriptファイル内で"require()"という記述を使うことになります。  
しかし、実行したときにエラーが出てしまうことがあります。  
その場合、インテンションアクションとクイックフィックスを表示する必要があります。  

ショートカット（コマンド）  
Windows -> Alt + Enter  
Mac -> Option + Return 

<参考サイト>  
[Windows版 & Mac版](https://qiita.com/kinmojr/items/058146a537b8e6498fe1)  
[Windows版](http://xyk.hatenablog.com/entry/2013/12/18/093256)

### Twitter bot を作成する際の注意点
Twitterでは同じつぶやきを次につぶやくには、間に別の投稿を10個挟まないと、同じつぶやきができないそうです。
Twitterのbotをプログラムを用いて利用したい場合、データを大量に用意して順番につぶやくように設定する方法があります。
もしくは乱数を使ってもできますが、同じ内容を連続でつぶやいていないかチェックしないといけないので、
乱数による処理が分からない場合、順番につぶやくようにすることをお勧めします。  
※プログラムを使わなくても良いと考えている場合、botを提供するサービスがありますので、そちらを利用してください。

### Reference
1. [IntelliJ IDEAでNode.jsプラグインをインストールする話](https://www.1ft-seabass.jp/memo/2013/11/16/intellij-idea-node-js-plugin-install/)
2. [Node.js入門 - とほほのWWW入門](http://www.tohoho-web.com/ex/nodejs.html)
3. [Node.jsでTwitter APIを使ってツイートを取得(APIの初期設定からやってみた)](http://shomi3023.com/2018/01/21/twitter-api-get-tweet/)
4. [Twitter REST APIの使い方 (Twitter APIの一覧及びパラメーターの種類が載っています)](https://syncer.jp/Web/API/Twitter/REST_API/)
5. [Twitter 開発者 ドキュメント日本語訳 (Twitter-API一覧が載っています)](http://westplain.sakuraweb.com/translate/twitter/Documentation/REST-APIs/Public-API/GET-statuses-mentions_timeline.cgi)
6. [Twitter for Node.js](https://www.npmjs.com/package/twitter)
