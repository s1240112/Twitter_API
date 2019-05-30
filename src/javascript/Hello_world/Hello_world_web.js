/*
    webサーバとして動作させる方法
 */

var http = require('http');
var server = http.createServer(function(req, res) {
    res.write("Hello world!\n");
    res.end();
}).listen(8080);