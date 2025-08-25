const express = require("express");
const router = express.Router();
const parser = require("../utils/multerSetup");
const { uploadResume } = require("../controllers/resumeController");
const auth = require("../middleware/auth");

// Route for uploading resume
router.post("/upload-resume",auth, parser.single("resume"), uploadResume);

module.exports = router;
