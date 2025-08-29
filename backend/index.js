const express = require('express');
const connectDB = require('./db/connect');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const userRoute = require('./routes/userRoute');
const resumeRoute = require('./routes/resumeRoute');
const interviewRoute = require('./routes/interviewRoute');
const path = require('path');


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