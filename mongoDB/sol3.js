var mongo = require('mongodb').MongoClient


var url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, function(err,db){
  var collection = db.collection('data');
  var person = {
    firstName : process.argv[2],
    lastName : process.argv[3]
  }
  collection.insert({
    person
  },function(err,data){
    if(err) throw err;
    console.log(JSON.stringify(person));
    db.close();
  })
})
