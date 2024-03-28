const express = require("express");

const authController = require("../controllers/AuthController");
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

router.use(authController.protect);

module.exports = router;
