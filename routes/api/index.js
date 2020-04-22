const router = require("express").Router();
const userRoutes = require("./user");
const login = require("./login");
const info = require("./info")


router.use("/register", userRoutes);
router.use("/authenticate", login)
router.use("/information", info)

module.exports = router;
