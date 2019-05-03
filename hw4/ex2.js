const {Subject} = require("rxjs");
const http = require("http");
const fork = require("child_process");

const fileSubject = new Subject();

function sendFile(reqResData) {
    reqResData.res.end(reqResData.fileData);
}

fileSubject.subscribe(sendFile);

http.createServer((req, res) => {
    const child = fork("./hw4/readFile.js");
    child.send(req.url);
    child.on("message", fileData => {
        fileSubject.next({
            req,
            res,
            fileData
        });
    });
}).listen(3030, () => console.log("Listening on localhost, port 3030"));
