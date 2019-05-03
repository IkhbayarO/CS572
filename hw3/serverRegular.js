const http=require("http");
const fs=require("fs");
const path=require("path");
const memoryUsage=require("./memoryUsage");

let bigFile=path.join(__direname, "300.csv");

http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/text"});
    memoryUsage("sync: before reading/sending");
    let bigCSVfile=fs.readFileSync(bigFile, "utf");
    res.end(bigCSVfile);
    res.write(bigCSVfile);
    memoryUsage("sync: after reading/sending");
}).listen(8080, ()=>console.log("Node listening"));