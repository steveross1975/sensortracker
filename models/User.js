const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        enum: ['donna', 'uomo', 'non-binary', 'preferisco non dirlo'],
        required: true,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;