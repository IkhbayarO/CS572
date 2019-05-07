const express=require("express");
const router=express.Router();

router.get("/", (req, res)=>{
    const conn=req.conn;
    conn.then(db=>{
        const dbo=db.db("homework01");
        dbo.collection("homework01").findOne()((err, docs)=>{
            if(err) throw err;
            res.status(200).json(docs);
        })
    }).catch(err=>console.log("error"));
})

module.exports=router;