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
    matId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SensorMat",
        required: true,
    },
    compatibleProfiles: [{
        type: String,
        enum: ['Athlete', 'Visually Impaired', 'Neuro Test'],
        required: true,
    }],
    layout: [new mongoose.Schema({ 
        sensorId: String, 
        position: [new mongoose.Schema({
            x: Number,
            y: Number,
        }, {_id: false})], 
        lightColor: String, 
    }, {_id: false})],
});

const SensorLayout = mongoose.model("SensorLayout", sensorLayout);

module.exports = SensorLayout;