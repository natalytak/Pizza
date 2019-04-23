var mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '',
//     database: 'pizza_db'
// });

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'pizza_db'
},
{
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    }

});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
return;    
}
console.log("connected as id: " + connection.threadId);
});

module.exports = connection;