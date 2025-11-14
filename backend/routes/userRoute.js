// import  Router from "express";
import { registerUser, loginUser, resumeUpload } from "../controllers/userController.js";

import express from 'express';

import { upload } from "../utils/cloudinaryConfig.js";

const router = express.Router();


// Register route
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post("/resume", upload.single("resume"), resumeUpload);

export default router;