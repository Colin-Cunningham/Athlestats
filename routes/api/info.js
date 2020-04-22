const router = require("express").Router();
const User = require("../../controllers/userController")
// POST route to register a user

router.route("/:email")
   .get(User.findByEmail)
   
   
   

module.exports = router