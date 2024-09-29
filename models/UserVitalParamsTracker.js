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
    BMI: {
        type: Number,
    },
    fatBodyMass: {
        type: Number,
    },
    bodyFatPerc: {
        type: Number,
    },
    leanBodyMass: {
        type: Number,
    },
    muscFreq: {
        type: Number,
    },
    subcutaneousFat: {
        type: Number,
    },
    visceralFat: {
        type: Number,
    },
    BMR: {
        type: Number,
    },
});

const UserVitalParamsTracker = mongoose.model("UserVitalParamsTracker", userVitalParamsSchema);

module.exports = UserVitalParamsTracker;