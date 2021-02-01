const mysql = require('mysql2');

//create connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: 'Betty123.',
    database: 'employees'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;