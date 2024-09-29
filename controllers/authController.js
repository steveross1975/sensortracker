const User = require("../models/User");

exports.signup = async (req, res) => {
    try {
        const {  email, password ,firstName, middleName, lastName, birthDate } = req.body;
        const user = await User.create({ email, password ,firstName, middleName, lastName, birthDate });
        res.status(201).json({ success: true, user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "User not found" });
        }
        if (user.password !== password) {
            return res
                .status(401)
                .json({success:false,message: "Incorrect password" });
        }
        // Passwords match
        res.status(200).json({success:true,message:"Login successful"});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};