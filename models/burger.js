var orm = require("../config/orm.js");

var burger = {

    all:function(cb) {
        orm.selectAllBurgers(function(res){
            cb(res);
        })
    },
    create: function(Burger_Name, cb){
        orm.insertBurger(Burger_Name, function(res){
            cb(res);
        });
    },
    update : function (id, cb) {
        orm.updateBurger(id, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;