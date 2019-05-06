const express = require("express");
const path = require("path");
const fs = require("fs");
const helmet = require("helmet"); //error handler
const morgan = require("morgan"); //keep track request changes
const cors = require("cors"); //accepting xhr request
const grades = require("./GradesHandler");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

const accessLogStream = fs.createWriteStream(path.join(__dirname, "logs/access.log"));
const port = (process.env.PORT || "3000");

app.set("port", port);
app.use("/grades", grades);

app.listen(port, () => console.log(`Server is listening with port ${port}`));

