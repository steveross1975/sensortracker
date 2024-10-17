const SensorLayout = require("../models/SensorLayout");

exports.createUserLayout = async (req, res) => {
    try {
        const { 
            createdAt,
            lastUpdatedAt,
            userId,
            matId,
            sensorLayoutId,
            chosenProfile,
        } = req.body;
        const layoutToInsert = await SensorLayout.create({
            createdAt,
            lastUpdatedAt,
            userId,
            matId,
            sensorLayoutId,
            chosenProfile,
        });
        res.status(201).json({ success: true, layoutToInsert });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};

exports.getUserLayout = async (req, res) => {
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

exports.updateUserLayout = async (req, res) => {
    try {
        const { 
            createdAt,
            lastUpdatedAt,
            userId,
            matId,
            sensorLayoutId,
            chosenProfile,
        } = req.body;
        const layoutToUpdate = await SensorLayout.findByIdAndUpdate(
            req.params.id,
            { 
                createdAt,
                lastUpdatedAt,
                userId,
                matId,
                sensorLayoutId,
                chosenProfile,
            }, { new: true }
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

exports.deleteUserLayout = async (req, res) => {
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