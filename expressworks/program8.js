const express = require('express');
const fs = require('fs');

var app = express()

app.get('/books', function(req, res) {
  var obj;
  fs.readFile(process.argv[3], function(err, data) {
    obj = JSON.parse(data)
    res.send(obj)
  })

}).listen(process.argv[2])
