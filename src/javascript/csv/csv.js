var fs = require('fs');
var parse = require('csv').parse;
var iconv = require('iconv-lite');

var parser = parse(function(err, data){
    console.log(data);
});

fs.createReadStream(__dirname + '/pokemon_kanto.csv').pipe(iconv.decodeStream('shift_jis')).pipe(parser);