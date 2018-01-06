const express = require('express');
const crypto = require('crypto');


var app = express()
app.get('/search',function(req,res){
  var search = req.query;
  res.send(search);
}).listen(process.argv[2])
