var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

const mongo = MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

module.exports = mongo;