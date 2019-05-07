const express = require("express");
const MongoClient=require("mongodb").MongoClient;
const util=require("util");
const bodyParser=require("body-parser");
const routes=require("./routes");

const url="mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01";
const connection=util.promisify(MongoClient.connect)(url);
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.enable("etag");

app.use("*", (req, res, next)=>{
    req.conn=connection;
    return next();
});
app.use("/ex2", routes);

app.use((err, req, res, next)=>{
    const status=err.status || 500;
    res.status(status).json({"error": "system error occured"});
});

app.listen(3000, () => console.log("Server starts with port 3000"));

