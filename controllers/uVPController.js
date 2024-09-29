const UserVitalParamsTracker = require("../models/UserVitalParamsTracker");
//const uvpUtils = require("../utils/uvpUtils");

exports.createUVP = async (req, res) => {
    try {
        const height = req.body.height;
        const weigth = req.body.weigth;
        //const BMI = BMICalc(weigth, height);
        const heightMt = height*100;
        const BMI = (1.3*weigth)/(heightMt ** 2.5)
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