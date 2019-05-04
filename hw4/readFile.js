const fs = require("fs");
function myReader(urlStr, cb){
    fs.readFile(urlStr, (err, data)=>{
        cb(data.toString());
    })
}

process.on("message", (urlStr) => {
    myReader(urlStr, (data)=>{
        process.send(data);
    })
});