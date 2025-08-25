const express = require('express');
const connectDB = require('./db/connect');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const userRoute = require('./routes/userRoute');
const resumeRoute = require('./routes/resumeRoute');
const path = require('path');


dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/test-upload", (req, res) => {
  res.sendFile(path.join(__dirname, "uploads", "718c8ca1529ef041f4c21a3012de21e8.pdf"));
});


connectDB();

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use('/auth', userRoute);
app.use("/api", resumeRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`)
})