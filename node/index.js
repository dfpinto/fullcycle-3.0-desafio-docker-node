const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);
const sql = "insert into people(name) values ('Dirley')";
connection.query(sql);
connection.end;

app.get("/", (req, res) => {
  let line = "";
  connection.query(`SELECT * from people`, (err, results) => {
    if (err) {
      throw err;
    }
    for (let people of results) {
      line += `<li>${people.name}</li>`;
    }
    res.send(
      `<h1>Full Cycle Rocks!</h1>
                <ul>` +
        line +
        `</ul>`
    );
  });
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
