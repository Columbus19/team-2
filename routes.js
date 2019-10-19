const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'users.sql'
});

const app = express();

app.get('/users', function (req, res) {
  connection.getConnection( function (err, connection) {
    connection.query('SELECT * FROM users', function (error, results, fields) {
      if (error) throw error;

      res.send(results)
    });
  });
});

app.listen(3000, () => {
  console.log('Go to localhost:3000');
});
