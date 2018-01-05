const net = require('net')
var server = net.createServer(function(socket){
var date = new Date();
  let  yy =   date.getFullYear()
  let mm  =  (date.getMonth()+1 < 10) ?  "0"+ (date.getMonth()+1) : date.getMonth()+1
  let day =  (date.getDate() < 10) ?  "0"+ date.getDate() : date.getDate()
  let hrs =  (date.getHours() < 10) ?  "0"+ date.getHours() : date.getHours()
  let min =  (date.getMinutes() < 10) ?  "0"+ date.getMinutes() : date.getMinutes()
  socket.write(yy+"-"+mm+"-"+day+" "+hrs+":"+min+"\n")
  socket.end();
})

server.listen(process.argv[2])
