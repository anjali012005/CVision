import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import connectDB from "./db/connect.js";
import userRoute from "./routes/userRoute.js";
import resumeRoute from "./routes/resumeRoute.js";
import interviewRoute from "./routes/interviewRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


connectDB();

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use('/auth', userRoute);
app.use("/api", resumeRoute);
app.use('/api/interview', interviewRoute);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`)
})