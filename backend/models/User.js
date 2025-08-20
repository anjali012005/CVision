const mongoose = require('mongoose');
const { minLength } = require('zod');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema);
module.exports = User;