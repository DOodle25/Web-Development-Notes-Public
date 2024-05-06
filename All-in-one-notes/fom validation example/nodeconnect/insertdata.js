var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true },
  function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb270");
    dbo.createCollection("customers777", function (err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  }
);
