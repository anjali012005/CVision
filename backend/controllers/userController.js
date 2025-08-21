const User = require("../models/User");



// Sign Up / Reister User
const registerUser = async(req, res)=>{
    try {
        const {name, email, password} = req.body;

        const user = await User.create({
            name,
            email,
            password
        });

        res.status(200).json({
            message: "User registered successfully!",
            user:{
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server error while registering user!"
        })
    }
}

module.exports = {registerUser};