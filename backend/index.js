const express = require('express');
const connectDB = require('./db/connect');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

connectDB();

app.listen(5000, ()=>{
    console.log("Started!")
})