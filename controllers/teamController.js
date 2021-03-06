const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.Team.create(req.body)
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Team.findOne({ teamID: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createPlayer: function (req, res) {
    console.log(req.body);
    db.Team.findOneAndUpdate({ teamID: req.body.teamID }, { $push: { players: req.body } })
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  findPlayer: function (req, res) {
    console.log(req.body)
    db.Team
    .findOne({_id: req.body.teamID }).
     where(players._id).equals(req.body.playerID)
    .then((dbModel) => {
      res.json(dbModel);
    })
    .catch((err) => res.status(422).json(err));
}
}