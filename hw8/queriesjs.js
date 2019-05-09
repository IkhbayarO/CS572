const express=require("express");
const router=express.Router();

router.get("/", (req, res)=>{
    const con=req.con;
    con.then(db=>{
        const dbo=db.db("db");
        dbo.collection("restaurants").find({}).toArray((err, docs)=>{
            if(err) throw err;
            res.status(200).json(docs);
        });
    }).catch(err=>console.log("error"));
});


module.exports=router;