const mongoose = require("mongoose");

const healthActivitySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    description: {
        type: String,
    },
    reactionTime: {
        type: Date,
    },
    firstStep: {
        type: Date,
    },
    secondStep: {
        type: Date,
    },
    thirdStep: {
        type: Date,
    },
    fourthStep: {
        type: Date,
    },
    nthStep: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    activityStartedAt: {
        type: Date,
        default: Date.now,
    },
});

const HealthActivity = mongoose.model("HealthActivity",
                                       healthActivitySchema);

module.exports = HealthActivity;