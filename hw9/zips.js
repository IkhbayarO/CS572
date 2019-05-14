const express=require("express");
const router=express.Router();

router.get("/1", (req, res)=>{
    const con=req.con;
    con.then(db=>{
        const dbo=db.db("db");
        dbo.collection("zips").aggregate([
            {$match: {state: "WA"}},
            {$project: {_id: 0, state: "$state", zip: "_$id"}}
        ]).toArray((err, doc)=>{
            if(err) throw err;
            res.status(200).json(doc);
        });
    }).catch(err=> console.log("Error"));
});

router.get("/2", (req, res)=>{
    const con=req.con;
    con.then(db=>{
        db.db("db").collection("zips").aggregate([
            {$match: {pop: {$lt: 5000}}},
            {$project: {_id: 0, zip: "$_id"}}
        ]).toArray((err, doc)=>{
            if(err) throw err;
            res.status(200).json(doc);
        });
    }).catch(err=>console.log("Error"));
});

router.get("/3", (req, res)=>{
    const con=req.con;
    con.then(db=>{
        db.db("db").collection("zips").aggregate([
            {$group: {_id:{state: "$state", city: "$city"}, numZip: {$sum: 1}}},
            {$match: {numZip: {$gt:1}}},
            {$project: {_id:0, state: "$_id.state", city: "$_id.city"}},
            {$sort: {"state": 1, "city": 1}}
        ]).toArray((err, doc)=>{
            if(err) throw err;
            res.status(200).json(doc);
        });
    }).catch(err=>console.log("Error"));
});

router.get("/4", (req, res)=>{
    const con=req.con;
    con.then(db=>{
        db.db("db").collection("zips").aggregate([
            {$group: {_id:{state: "$state", city: "$city"}, pop: {$sum: "$pop"}}},
            {$sort: {"_id.state": 1, "pop": 1}},
            {$group: {_id: "$_id.state", city: {$first: "$_id.city"}, pop: {$first: "$pop"}}},
            {$sort: {"_id": 1}}
        ]).toArray((err, doc)=>{
            if(err) throw err;
            res.status(200).json(doc);
        });
    }).catch(err=>console.log("Error"));
});

module.exports=router;
