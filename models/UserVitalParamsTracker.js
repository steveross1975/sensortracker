const mongoose = require("mongoose");

const userVitalParamsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    activityType: {
        type: String,
        enum: ["exercise", "meal", "water intake", "sleep"],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
    },
    calories: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const UserVitalParamsTracker = mongoose.model("UserVitalParamsTracker",
    userVitalParamsSchema);

module.exports = UserVitalParamsTracker;