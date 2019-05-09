const express=require("express");
const MongoClient=require("mongodb").MongoClient;
const util=require("util");
const bodyParser=require("body-parser");
const router=require("./zips");
const cors=require("cors");
const helmet=require("helmet");

const uri="mongodb+srv://ikhbayar:password99@cluster0-vxahr.mongodb.net/test?retryWrites=true";
const connection=util.promisify(MongoClient.connect)(uri);

const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.enable("etag");
app.use(cors());
app.use(helmet());

app.use("*", (req, res, next)=>{
    req.con=connection;
    return next();
});

app.use("/zips", router);

app.use((err, req, res, next)=>{
    res.status(err.status || 500).json({"error": "System error is occured"});
})

app.listen(4000, ()=>console.log("Server started on port 4000"));

