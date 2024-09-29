const mongoose = require("mongoose");

const userVitalParamsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    age: { //capire come calcolarla
        type: Number,
        required: true,
    },
    gender: { //capire come acquisirlo dallo User
        type: Number,
        required: true,
    },
    BMI: {
        type: Number,
    },
    fatBodyMass: { //da sensore bioimpedenziometrico
        type: Number,
    },
    bodyFatPerc: { //calcolato da fatBodyMass ((fatBodyMass/weight)*100)
        type: Number,
    },
    leanBodyMass: { //calcolato da fatBodyMass (weight - fatBodyMass)
        type: Number,
    },
    muscFreq: {
        type: Number,
    },
    subcutaneousFat: { //da sensore bioimpedenziometrico
        type: Number,
    },
    visceralFat: { //da sensore bioimpedenziometrico
        type: Number,
    },
    BMR: {
        type: Number,
    },
});

const UserVitalParamsTracker = mongoose.model("UserVitalParamsTracker", userVitalParamsSchema);

module.exports = UserVitalParamsTracker;