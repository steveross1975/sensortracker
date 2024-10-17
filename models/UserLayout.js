const mongoose = require("mongoose");

const sensorLayout = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastUpdatedAt: {
        type: Date,
        default: Date.now,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    matId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SensorMat",
        required: true,
    },
    sensorLayoutId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SensorLayout",
        required: true,
    },
    chosenProfile: {
        type: String,
        enum: ['Athlete', 'Visually Impaired', 'Neuro Test'],
        required: true,
    },
});

const SensorLayout = mongoose.model("SensorLayout", sensorLayout);

module.exports = SensorLayout;