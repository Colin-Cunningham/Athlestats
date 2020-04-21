const router = require("express").Router();
const userRoutes = require("./user");
const login = require("./login");

// Book routes
router.use("/register", userRoutes);
router.use("/authenticate", login)

module.exports = router;
