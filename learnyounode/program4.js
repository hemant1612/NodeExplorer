var fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2],function(err,dir){
  if(err) console.log(err);
  dir.map(function(v){
    if (path.extname(v) == "."+process.argv[3])
    console.log(v)
  })
})
