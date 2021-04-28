var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 1000,
  connectTimeout  : 60*60*1000,
  acquireTimeout  : 60*60*1000,
  timeout         : 60*60*1000,
  host            : 'database-1.cqffxokvsyvy.us-east-1.rds.amazonaws.com',
  user            : 'admin',
  port            : '3306',
  password        : 'REDACTED',
  database        : 'DBmySQL'
});

module.exports.pool = pool;
