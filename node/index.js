const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.query(`
  CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  )
`);

const sqlInsert = `INSERT INTO people(name) values('Victor')`
connection.query(sqlInsert)
var pessoas = [];
const sqlSelect = 'SELECT * FROM people';
connection.query(sqlSelect, (err, results) => {
    if (err) throw err;

    results.forEach(row => {
        pessoas.push([row.id, row.name])
    });
  });
connection.end();


app.get('/', (req,res) => {
    let listaPessoasString = `<table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                ${pessoas.map((row) =>{
                    return `
                    <tr>
                        <td>${row[0]}</td>
                        <td>${row[1]}</td>
                    </tr>    `;
                }).join('')}
            </tbody>
        </table>
    `
    res.send('<h1>Full Cycle Rocks!</h1><br>'+listaPessoasString)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})