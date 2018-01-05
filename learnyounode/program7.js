const http = require('http');
const bl = require('bl')

// function callback(response){
//   response.setEncoding('utf8')
//   let str = "";
//   let n = 0;
//   response.on("data" , function(chunk){
//     str+=chunk;
//     n+=chunk.length;
//   })
//   response.on("end",function(){
//     console.log(n)
//     console.log(str)
//   })
// }
//
//
// http.get(process.argv[2], callback)

http.get(process.argv[2], callback)

function callback(response) {
  response.pipe(bl(function(err, data) {
    if(err){
      console.log(err);
    }
    console.log(data.toString().length)
    console.log(data.toString())
  }))

}
