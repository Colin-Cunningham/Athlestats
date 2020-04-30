const router = require("express").Router();
const userRoutes = require("./user");
const login = require("./login");
const info = require("./info")
const team = require("./team")


router.use("/register", userRoutes);
router.use("/authenticate", login)
router.use("/information", info)
router.use("/team", team)


module.exports = router;
