const { Router } = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const express = require('express');

const router = express.Router();


// Register route
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;