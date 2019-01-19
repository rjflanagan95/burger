// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll(function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger_name, callback) {
    orm.insertOne(burger_name, callback);
  },

  updateOne: function(burger_id, callback) {
    var whichBurger = "id=" + burger_id;
    orm.updateOne("burgers", { devoured : true }, whichBurger, callback);
  },
};

module.exports = burger;