const  Router  = require("express");
const { registerUser, loginUser, resumeUpload } = require("../controllers/userController");
const express = require('express');
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const router = express.Router();


// Register route
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post("/resume", upload.single("resume"), resumeUpload);

module.exports = router;