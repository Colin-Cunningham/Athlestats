const router = require("express").Router();
const User = require("../../controllers/userController")
// POST route to register a user

router.route("/")
  .post(User.create)

module.exports = router




