const User = require("../models/User");



// Sign Up / Reister User
const registerUser = async(req, res)=>{
    try {
        const {name, email, password} = req.body;

        // console.log({email});

        //All feilds are mendatory
        if(!name || !email || !password){
            res.status(500).json({
                message: 'All feilds are mendatory!'
            })
        }

        //check if user already exists
        const existingUser = User.findOne({email});
        if(existingUser){
            res.status(500).json({
                message: 'User already exist!'
            })
        }

        //Create new User
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