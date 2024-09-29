const UserVitalParamsTracker = require("../models/UserVitalParamsTracker");
//const uvpUtils = require("../utils/uvpUtils");

exports.createUVP = async (req, res) => {
    try {
        const {
            userId,
            createdAt,
            height,
            weight,
            age,
            gender,
            appoBMI,
            fatBodyMass,
            bodyFatPerc,
            leanBodyMass,
            muscFreq,
            subcutaneousFat,
            visceralFat,
            appoBMR,
        } = req.body;
        //const BMI = BMICalc(weigth, height);
        const heightMt = height*100;
        const BMI = (1.3*weight)/(heightMt ** 2.5)
        if(gender == 'donna') {
            const BMR =  655 + (9.6*weight) + (1.8*height) - (4.7*age);
        } else if (gender == 'uomo') {
            const BMR =  66.5 + (13.7*weight) + (5*height) - (6.8*age)
        } else {
            const BMR =  0
        }
        const userVitalParams = await UserVitalParamsTracker.create({
            userId,
            createdAt,
            height,
            weight,
            age,
            gender,
            BMI,
            fatBodyMass,
            bodyFatPerc,
            leanBodyMass,
            muscFreq,
            subcutaneousFat,
            visceralFat,
            BMR,
        });
        res.status(201).json({ success: true, userVitalParams });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};

exports.getUVP = async (req, res) => {
    try {
        const userVitalParams = await UserVitalParamsTracker.findById(req.params.id);
        if (!userVitalParams) {
            return res
                .status(404)
                .json({ success: false, message: "Activity not found"});
        }
        res.status(200).json({ success: true, userVitalParams });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};