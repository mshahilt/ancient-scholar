const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// router.post("/login", userController.login);
// router.post("/verify-otp", userController.verifyOtp)

router.get("/getBlogs", userController.getBlogs);

module.exports = router;
