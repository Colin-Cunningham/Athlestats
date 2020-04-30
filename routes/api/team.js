const router = require("express").Router();
const Team = require("../../controllers/teamController")
const User = require("../../controllers/userController")
// POST route to register a user


router.route("/")
   .post(Team.create)
   .put(Team.createPlayer)
   .get(Team.findPlayer)

   
router.route("/:id")
    .get(Team.findById)

module.exports = router

