const db = require("../models");
const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh'

// Defining methods for the booksController
module.exports = {
  create: function(req, res){
    db.User
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
   authenticate: function(req, res){
    const { email, password } = req.body;
     db.User
     .findOne({ email }, function(err, user) {
      if (err) {
        console.error(err);
        res.status(500)
          .json({
          error: 'Internal error please try again'
        });
      } else if (!user) {
        res.status(401)
          .json({
            error: 'Incorrect email or password'
          });
      } else {
        user.isCorrectPassword(password, function(err, same) {
          if (err) {
            res.status(500)
              .json({
                error: 'Internal error please try again'
            });
          } else if (!same) {
            res.status(401)
              .json({
                error: 'Incorrect email or password'
            });
          } else {
            // Issue token
            const payload = { email };
            const token = jwt.sign(payload, secret, {
              expiresIn: '1h'
            });
            console.log(res)
            res.cookie('id', token, { httpOnly: false, withCredentials: true })
              .sendStatus(200);
          }
        });
      }
    });
   },
   findByEmail: function(req, res) {
     db.User
      .findOne({ email: req.params.email })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
   },
   update: function(req, res) {
    db.User
      .updateOne({ email: req.params.email }, { $set: { teamID: req.params.id} })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
