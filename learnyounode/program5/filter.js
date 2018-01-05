const fs = require('fs')
const path = require('path')

module.exports = function(dir, filterStr, callback) {
  fs.readdir(dir, function(err, data) {
    if (err)
      return callback(err);
    arr = [];
    data.forEach(function(v) {
      if (path.extname(v) === '.' + filterStr)
        arr.push(v);
      }
    )
    return callback(null, arr)
  })

}
