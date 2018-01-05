var fs = require('fs');
var buffer = fs.readFileSync('/home/hemant/node/learnyounode/test.txt');
var ar  = buffer.toString().split("\n");
console.log(ar.length -1);
