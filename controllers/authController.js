const User = require("../models/User");
const { hashPassword, verifyPassword } = require('../utils/pwdUtils');

exports.signup = async (req, res) => {
    try {
        let {  email, password ,firstName, middleName, lastName, birthDate, gender } = req.body;
        try {
            password = await hashPassword(password);
          } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
        const user = await User.create({ email, password, firstName, middleName, lastName, birthDate, gender });
        res.status(201).json({ success: true, user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && await verifyPassword(password, user.password)) {
            return  res
                    .status(200)
                    .json({success: true, message: "Login Successful"});
        } else {
            return  res
                    .status(401)
                    .json({success: false, message: "Incorrect Credentials" });
        }
    } catch (error) {
        res.status(400).json({success:false, message: error.message});
    }
};