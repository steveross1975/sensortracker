const mongoose = require("mongoose");

const sensorMat = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastUpdatedAt: {
        type: Date,
        default: Date.now,
    },
    distance: {
        type: Number,
        required: true,
    },
    dimensions: [new mongoose.Schema({
            height: Number,
            width: Number,
        }, {_id: false})],
});

const SensorMat = mongoose.model("SensorMat", sensorMat);

module.exports = SensorMat;