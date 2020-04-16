const router = require("express").Router();
const userRoutes = require("./user");

// Book routes
router.use("/register", userRoutes);

module.exports = router;
