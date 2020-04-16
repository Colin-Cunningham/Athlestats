const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function(req, res){
    db.User
    .create(req.body)
  },
};
