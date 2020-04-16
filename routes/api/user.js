const router = require("express").Router();
const User = require("../../controllers/userController")
// POST route to register a user

router.route("/api/register")
  .post(User.create)



  module.exports = router




