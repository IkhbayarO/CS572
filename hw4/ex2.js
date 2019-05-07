const http = require("http");
const {fork} = require("child_process");
const path = require("path");

const server = http.createServer();


server.on("request", (req, res) => {
    const childProcess = fork("readFile.js");
    childProcess.send(path.join(__dirname, "test.txt"));
    childProcess.on("message", data => {
        res.end(data);
    });
});
server.listen(3000);