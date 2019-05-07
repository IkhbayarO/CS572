// const express = require("express");
// const path = require("path");
// const fs = require("fs");
// const helmet = require("helmet"); //security
// const morgan = require("morgan"); //keep track request changes
// const cors = require("cors"); //accepting xhr request
// const grades = require("./GradesHandler");
//
// const app = express();
//
// app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));
// app.use(cors());
// app.use(helmet());
// app.use(morgan("dev"));
//
// const accessLogStream = fs.createWriteStream(path.join(__dirname, "logs/access.log"));
// const port = (process.env.PORT || "3000");
//
// app.set("port", port);
// app.use("/grades", grades);
//
// app.listen(port, () => console.log(`Server is listening with port ${port}`));
//

const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require('body-parser');

const grades = require("./grades");

const api = express();

api.use(bodyParser.json());
api.use(logger("tiny"));
api.use(cors());

api.get("/", (req, res) => {
    res.json(grades);
});

api.post('/', (req, res) => {
    const { name, course, grade } = req.body;
    grades.add(name, course, grade);
    res.json(grades);
});

api.put('/', (req, res) => {
    const { id, name, course, grade } = req.body;
    grades.update(id, name, course, grade);
    res.json(grades);
});

api.delete('/', (req, res) => {
    grades.remove(req.body.id);
    res.json(grades);
});

api.listen(8000);
