var mysql = require('mysql');
var util = require('util');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "example",
    database: "moto"
});

var fieldsCombined = {
    "Seat height":"([0-9]*\.[0-9]{2} ccm)|([0-9]*\.[0-9]{2} cubic inches)"
};

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM items_bikez_3 LIMIT 2";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        result.forEach(function(value){
            for (var key in value) {
                console.log(key, value[key]);
            }
        });
    });
});
