// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

var connection = require("../config/connection.js");

var orm = {

    selectAllBurgers: function (cb){
        var querystring = "select * from burgers";
        connection.query(querystring, function (err, result){
            if (err) throw err;
            cb(result);
        });
    },
    insertBurger : function(Burger_Name, cb) {
        var querystring = "insert into burgers (burger_name) values (?)";
        connection.query(querystring, [Burger_Name], function(err, result){
            if (err) throw err;
            cb(result);
        });      
    },
    updateBurger : function (id, cb) {
        var querystring = "update burgers set devoured = true where id = ?";
        connection.query(querystring, [id], function (err, result){
            if (err) throw err;
            cb(result);
        });     
    }
}

module.exports = orm;