const mongoose = require("mongoose");

const healthActivitySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    profile: { 
        type: String,
        enum: ['Athlete', 'Visually Impaired', 'Neuro Test'],
        required: true,
    },
    layoutId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SensorLayout",
        required: true,
    },
    description: {
        type: String,
    },
    activitySummary: [new mongoose.Schema({
        activityStartedAt: {
            type: Date,
            default: Date.now,
        },
        reactionTime: {
            type: Date
        },
        execution: [new mongoose.Schema({
            sensorId: String,
            touchedAt: Date,
        }, {_id: false})]
    })],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastUpdatedAt: {
        type: Date,
        default: Date.now,
    },
});

const HealthActivity = mongoose.model("HealthActivity",
                                       healthActivitySchema);

module.exports = HealthActivity;