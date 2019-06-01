var http = require("http");
var fs = require("fs");
var ejs = require("ejs");
var srv = http.createServer();
var temp = fs.readFileSync(__dirname + "/template.ejs", "utf-8");
srv.on("request", function(req, res) {
    var page = ejs.render(temp, {
        title:"TITLE",
        content:"TEST"
    });
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(page);
    res.end();
});
srv.listen(3000, "localhost");
console.log("server listening...");