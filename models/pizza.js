var orm = require("../config/orm.js");

var pizza = {
  selectAll: function(cb) {
    orm.selectAll("pizza", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("pizza", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("pizza", objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteOne: function(condition, cb) {
    orm.deleteOne("pizza", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (pizza_controller.js).
module.exports = pizza;
