const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const util = require("util");
const bodyParser = require("body-parser");
const routes = require("./queriesjs");

const uri = "mongodb+srv://ikhbayar:password99@cluster0-vxahr.mongodb.net/test?retryWrites=true";
const connection = util.promisify(MongoClient.connect)(uri);

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.enable("etag");

app.use("*", (req, res, next) => {
    req.con = connection;
    return next();
});

app.use("/queries", routes);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({"error": "system error occured"});
});
app.listen(3000, () => console.log("Server started on port 3000"));