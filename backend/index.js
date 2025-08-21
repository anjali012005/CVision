const express = require('express');
const connectDB = require('./db/connect');
const dotenv = require('dotenv');

const userRoute = require('./routes/userRoute');


dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDB();

app.use('/auth', userRoute);

app.listen(5000, ()=>{
    console.log("Started!")
})