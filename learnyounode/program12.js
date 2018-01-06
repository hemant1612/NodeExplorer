const url = require('url')
const http = require('http')

var server = http.createServer(function(req, res) {
  var result;
  res.writeHead(200, {'Content-Type': 'application/json'});
  if (req.method == 'GET') {
    var str = url.parse(req.url, true);
    var date = new Date(str.query.iso)
    var unixTime = date.getTime();

    if (/^\/api\/parsetime/.test(req.url) == "/api/parsetime") {

      var hour = date.getHours();
      var min = date.getMinutes();
      var second = date.getSeconds();

      var obj = {
        hour: hour,
        minute: minute,
        second: second
      }

      result = JSON.stringify(obj);
    } else {
      var obj = {
        unixtime: unixTime
      }
      result = JSON.parse(obj);
    }
  }
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify(result));
})
server.listen(8080)
