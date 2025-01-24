const express = require("express");
const upload = require('../config/multer');
const router = express.Router();
const adminController = require("../controllers/adminController");


router.post("/addBlog", upload, adminController.addBlog);

module.exports = router;
