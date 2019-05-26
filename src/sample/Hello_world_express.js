/*
    NodeJSのフレームワークであるExpressによる
    webブラウザ上での Hello World! の表示
 */

var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
});