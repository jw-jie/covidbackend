const mysql   = require('mysql');

module.exports.connection = mysql.createConnection({
host: process.env.DATAHOST,
user: process.env.DATAUSERNAME,
password: process.env.DATAPASSWORD,
database: process.env.DATABASE
});

