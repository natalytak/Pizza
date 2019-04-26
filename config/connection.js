var mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '',
//     database: 'pizza_db'
// });
var connection;

if (process.send.JAWSDB_URL) {
    connection = mysql.createConnection(process.send.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'pizza_db'
    })
}

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
return;    
}
console.log("connected as id: " + connection.threadId);
});

module.exports = connection;