var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err)
    throw err;
  var connection = db.collection('prices');
  connection.aggregate([
    {
      $match: {
        size: process.argv[2]
      }
    }, {
      $group: {
        _id: 'average',
        average: {
          $avg: '$price'
        }
      }
    }
  ]).toArray(function(err, results) {
    if (err)
      throw err;
    console.log(Number(results[0].average).toFixed(2))
  })
})
