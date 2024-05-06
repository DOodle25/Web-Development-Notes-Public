var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb28");
    // to create new collection using nodejs in mongo
    // dbo.createCollection("customers", function (err, res) {
    //     if (err) throw err;
    //     console.log("Customer Collection created!");
    //     db.close();
    // });
    var query = [
        {
            EmpCode: "E001",
            Name: "Rohit",
            Email: "rohit@gmail.com",
            Designation: "Developer",
            Country: "India"
        },
        {
            EmpCode: "E002",
            Name: "Rajesh",
            Email: "rajesh@gmail.com",
            Designation: "Manager",
            Country: "India"
        }
    ];

    // to insert data into mongodb using nodejs
    dbo.collection("customers").insertMany(query, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
    // to retrieve all the data from database using nodejs
    dbo.collection("customers").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });

});