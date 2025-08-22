const express = require('express');
const connectDB = require('./db/connect');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoute = require('./routes/userRoute');


dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDB();

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
}))

app.use('/auth', userRoute);

app.listen(5000, ()=>{
    console.log("Started!")
})