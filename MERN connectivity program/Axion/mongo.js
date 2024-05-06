const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const port = 4001;
const url = "mongodb://localhost:27017/";
const dbName = "testdb";
const client = new MongoClient(url, {useUnifiedTopology: true});
app.get("/", async (req, res) => {
    try {
        await client.connect();
        const db = client.db(mydb28);
        const collection = db.collection("customers");
        const result = await collection.find({}).toArray();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    } finally {
        await client.close();
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});