var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_myersu',
    password        : '9099',
    database        : 'cs340_myersu'
});

module.exports.pool = pool;
