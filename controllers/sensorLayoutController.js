const SensorLayout = require("../models/SensorLayout");

exports.createLayout = async (req, res) => {
    try {
        const { 
            createdAt,
            lastUpdatedAt,
            numberOfSensors,
            compatibleProfiles,
            layout,
        } = req.body;
        const layoutToInsert = await SensorLayout.create({
            createdAt,
            lastUpdatedAt,
            numberOfSensors,
            compatibleProfiles,
            layout,
        });
        res.status(201).json({ success: true, layoutToInsert });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};

exports.getLayout = async (req, res) => {
    try {
        const layout = await SensorLayout.findById(req.params.id);
        if (!layout) {
            return res
                .status(404)
                .json({ success: false, message: "Layout not found"});
        }
        res.status(200).json({ success: true, layout });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};

exports.updateLayout = async (req, res) => {
    try {
        const { createdAt,
                lastUpdatedAt,
                numberOfSensors,
                compatibleProfiles,
                layout } = req.body;
        const layoutToUpdate = await SensorLayout.findByIdAndUpdate(
            req.params.id,
            { createdAt,
                lastUpdatedAt,
                numberOfSensors,
                compatibleProfiles,
                layout },
            { new: true }
        );
        if (!layoutToUpdate) {
            return res
                .status(404)
                .json({ success: false, message: "Layout not found"});
        }
        res.status(200).json({ success: true, layoutToUpdate });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};

exports.deleteLayout = async (req, res) => {
    try {
        const layout = await SensorLayout.findByIdAndDelete(req.params.id);
        if (!layout) {
            return res
                .status(404)
                .json({ success: false, message: "Layout not found"});
        }
        res
            .status(200)
            .json({ success: true,
                    message: "Layout deleted successfully" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};