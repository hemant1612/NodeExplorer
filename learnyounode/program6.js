var http = require('http');


function callback(response){
  response.setEncoding('utf8')
  response.on("data" , function(chunk){
    console.log(chunk);
  })
}


http.get(process.argv[2], callback)
