var mysql = require('mysql');
var util = require('util');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "example",
    database: "moto"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM items_bikez_3 LIMIT 1";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + util.inspect(result));
    });
});
