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
    var sql = "SELECT * FROM items_bikez_3 LIMIT 2";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        result.forEach(function(value){
            for (var key in value) {
                var matches=[];
                if(value[key].length){
                    console.log(key, ":", value[key]);
                    if(key=="Displacement") matches = value[key].match(/([0-9]*.[0-9]{2} ccm)|([0-9]*.[0-9]{2} cubic inches)/g);
                    if(matches.length) console.log(util.inspect(matches));
                }
            }
        });
    });
});
