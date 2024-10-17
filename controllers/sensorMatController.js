const SensorMat = require("../models/SensorMat");

exports.createMat = async (req, res) => {
    try {
        const { 
            createdAt,
            lastUpdatedAt,
            distance,
            dimensions,
        } = req.body;
        const matToInsert = await SensorMat.create({
            createdAt,
            lastUpdatedAt,
            distance,
            dimensions,
        });
        res.status(201).json({ success: true, matToInsert });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};

exports.getMat = async (req, res) => {
    try {
        const mat = await SensorMat.findById(req.params.id);
        if (!mat) {
            return res
                .status(404)
                .json({ success: false, message: "Mat not found"});
        }
        res.status(200).json({ success: true, mat });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};

exports.updateMat = async (req, res) => {
    try {
        const { createdAt,
                lastUpdatedAt,
                distance,
                dimensions } = req.body;
        const matToUpdate = await SensorMat.findByIdAndUpdate(
            req.params.id,
            { createdAt,
                lastUpdatedAt,
                distance,
                dimensions },
            { new: true }
        );
        if (!matToUpdate) {
            return res
                .status(404)
                .json({ success: false, message: "Mat not found"});
        }
        res.status(200).json({ success: true, matToUpdate });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
}
exports.deleteMat = async (req, res) => {
    try {
        const mat = await SensorMat.findByIdAndDelete(req.params.id);
        if (!mat) {
            return res
                .status(404)
                .json({ success: false, message: "Mat not found"});
        }
        res
            .status(200)
            .json({ success: true,
                    message: "Mat deleted successfully" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};