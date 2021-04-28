var express = require('express');
var db = require('./database/db-connector');
var app = express();
PORT = 8898;
app.get('/', function(req, res){
  query1 = 'DROP TABLE IF EXISTS diagnostic;';
  query2 = 'CREATE TABLE diagnostic(id INT PRIMARY KEY AUTO_INCREMENT, text VARCHAR(255) NOT NULL);';
  query3 = 'INSERT INTO diagnostic (text) VALUES ("MySQL is working!")';
  query4 = 'SELECT * FROM diagnostic;';
  db.pool.query(query1, function (err, results, fields){
    db.pool.query(query2, function(err, results, fields){
      db.pool.query(query3, function(err, results, fields){
	db.pool.query(query4, function(err, results, fields){
	  res.send(JSON.stringify(results));
	});
      });
    });
  });
});
app.listen(PORT, function(){
  console.log('Express started on http://flip2.engr.oregonstate.edu:' + PORT + '; press Ctrl-C to terminate.');
});
