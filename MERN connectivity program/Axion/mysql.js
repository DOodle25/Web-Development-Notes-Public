const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testdb",
});

connection.connect();
var app = express();
app.use(cors());
app.set("post", process.env.port || 5001);
app.get("/", function(req, res, next){
    connection.query("SELECT * FROM employee", function(err, result){
        if (err){
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result);
    });
})

app.listen(5001,function(){
    console.log("Server is running on port 5001")
})

app.listen(5001, function(){
    console.log("Server is running on port 5001");
});



