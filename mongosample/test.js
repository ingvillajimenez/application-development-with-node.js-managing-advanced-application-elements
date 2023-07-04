var mongoClient1 = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydatabase";

mongoClient1.connect(url, function (err, db) {
  if (err) throw err;
  console.log("database created");
  db.close();
});
