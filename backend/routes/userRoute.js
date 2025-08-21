const { Router } = require("express");
const { registerUser } = require("../controllers/userController");
const express = require('express');

const router = express.Router();


// Register route
router.post('/register', registerUser);

module.exports = router;