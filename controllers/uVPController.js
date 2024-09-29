const UserVitalParamsTracker = require("../models/UserVitalParamsTracker");

exports.createUVP = async (req, res) => {
    try {
        const { userId, 
                activityType, 
                description, 
                duration, 
                calories } = req.body;
        const activity = await UserVitalParamsTracker.create({
            userId,
            activityType,
            description,
            duration,
            calories,
        });
        res.status(201).json({ success: true, activity });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};

exports.getUVP = async (req, res) => {
    try {
        const activity = await UserVitalParamsTracker.findById(req.params.id);
        if (!activity) {
            return res
                .status(404)
                .json({ success: false, message: "Activity not found"});
        }
        res.status(200).json({ success: true, activity });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};

exports.updateUVP = async (req, res) => {
    try {
        const { userId, 
                activityType, 
                description, 
                duration, 
                calories } = req.body;
        const activity = await UserVitalParamsTracker.findByIdAndUpdate(
            req.params.id,
            { userId, activityType, description, duration, calories},
            { new: true }
        );
        if (!activity) {
            return res
                .status(404)
                .json({ success: false, message: "Activity not found"});
        }
        res.status(200).json({ success: true, activity });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};

exports.deleteUVP = async (req, res) => {
    try {
        const activity = await UserVitalParamsTracker
                                    .findByIdAndDelete(req.params.id);
        if (!activity) {
            return res
                .status(404)
                .json({ success: false, message: "Activity not found"});
        }
        res
            .status(200)
            .json({ success: true,
                    message: "Activity deleted successfully" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};
