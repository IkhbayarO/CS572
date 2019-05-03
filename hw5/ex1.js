let express = require("express");
let axios = require("axios");
let app = express();

app.set("port", process.env.PORT || 3000);
const port = app.get("port");
app.enable("case sensitive routing");
app.enable("trust proxy");
app.enable("strict routing");
app.disable("x-powered-by");


let totalNumberOfUser = 20;
let current = 0;
let usersPerPage = 10;
let next = current + usersPerPage;
let currentPageNumber = 1;
app.get("/", (req, res) => {
    res.send("Hello");
})
app.get("/users", (req, res) => {
    current = 0;
    next = current + usersPerPage;
    currentPageNumber = 1;
    getTable(res);
});

app.get("/prev", (req, res) => {
    if (current > 0) {
        current -= usersPerPage;
        next = current + usersPerPage;
        currentPageNumber--;
    }
    getTable(res);
});

app.get("/next", (req, res) => {
    if (next < totalNumberOfUser) {
        current += usersPerPage;
        next = current + usersPerPage;
        currentPageNumber++;
    }
    getTable(res);
})


app.listen(port, () => console.log(`Server started with port ${port}`));

async function getTable(res) {
    try {
        const users = await axios.get("https://randomuser.me/api/?results=" + totalNumberOfUser);
        // res.statusCode = 200;
        // res.setHeader("Content-type", "text/html");
        res.write(wrap(users.data.results.slice(current, next)));
        res.end();
    } catch (e) {
        console.log(e);
    }
}

function wrap(userData) {
    let rowData = userData.map(x =>
        `<tr>
            <td>${x.name.first} ${x.name.last}</td>
            <td>${x.gender}</td>
            <td>${x.email}</td>
            <td>${x.dob.age}</td>
            <td>${x.location.city}</td>
            <td>${x.cell}</td>
        </tr>`
    );
    let rowUsers = "";
    rowData.forEach(x => rowUsers += x);
    const pagination = `
        <tr>
            <td></td>
            <td></td>
            <td><a href="/prev">Previous</a></td>
            <td><a href="/next">Next</a></td>
            <td></td>
            <td></td>
        </tr>
    `;
    let result = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Users</title>
    <style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
</head>
<body>
<h2>User list</h2>
    <table>
        <thead>
            <tr>
                <th>First & Last name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Age</th>
                <th>City</th>
                <th>Cell phone</th>
            </tr>
        </thead>
        <tbody>
            ${rowUsers}
            ${pagination}
        </tbody>
    </table>
</body>
</html>`;
    return result;
}

