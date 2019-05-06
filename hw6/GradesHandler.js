const express = require("express");
const gradeService = require("./gradeService");

const routers = express.Router();
// const gradeService = new gradeService();

routers.get("/", (req, res, next) => {
    res.send(gradeService.getAll());
});
routers.get("/:id", (req, res, next) => {
    res.send(gradeService.get(req.params.id));
});
routers.post("/", (req, res, next) => {
    if (!Object.keys(req.body.length)) {
        next({status: 400, message: "Error, empty json"})
    } else {
        const isAdded = gradeService.add(req.body);
        if (isAdded) {
            res.send("Added successfully");
        } else {
            next({status: 304, message: "Post error"});
        }
    }
});
routers.put("/:id", (req, res, next) => {
    if (!Object.keys(req.body.length)) {
        next({status: 400, message: "Error, empty json"});
    } else {
        const isUpdated = gradeService.update(req.params.id, req.body);
        if (isUpdated) {
            res.send("Updated Successfully");
        } else {
            next({status: 304, message: "Post error"});
        }
    }
});
routers.delete("/:id", (req, res, next)=>{
   const isDeleted=gradeService.delete(req.params.id);
   if(isDeleted){
       res.send("Deleted Successfully");
   }else{
       next({status: 304, message: "Delete error"});
   }
});
module.exports=routers;