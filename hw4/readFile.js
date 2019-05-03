const fs = require("fs");
const url = require("url");

process.on("message", (urlStr) => {
    let pathToFile = url.parse(urlStr, true).query.url;
    let src = fs.createReadStream(pathToFile);
    let fileData = "";
    src.on("data", (dataChunk) => fileData += dataChunk);
    src.on("end", () => process.send(fileData));
});