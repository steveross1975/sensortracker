const HealthActivity = require("../models/HealthActivity");

exports.createActivity = async (req, res) => {
    try {
        const { 
            userId,
            activityType,
            description,
            reactionTime,
            firstStep,
            secondStep,
            thirdStep,
            fourthStep,
            nthStep,
            createdAt,
            activityStartedAt,
        } = req.body;
        const activity = await HealthActivity.create({
            userId,
            activityType,
            description,
            reactionTime,
            firstStep,
            secondStep,
            thirdStep,
            fourthStep,
            nthStep,
            createdAt,
            activityStartedAt,
        });
        res.status(201).json({ success: true, activity });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message});
    }
};

exports.getActivity = async (req, res) => {
    try {
        const activity = await HealthActivity.findById(req.params.id);
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

// exports.updateActivity = async (req, res) => {
//     try {
//         const { userId, 
//                 activityType, 
//                 description, 
//                 duration, 
//                 calories } = req.body;
//         const activity = await HealthActivity.findByIdAndUpdate(
//             req.params.id,
//             { userId, activityType, description, duration, calories},
//             { new: true }
//         );
//         if (!activity) {
//             return res
//                 .status(404)
//                 .json({ success: false, message: "Activity not found"});
//         }
//         res.status(200).json({ success: true, activity });
//     } catch (error) {
//         res.status(400).json({ success: false, message: error.message});
//     }
// };

// exports.deleteActivity = async (req, res) => {
//     try {
//         const activity = await HealthActivity
//                                     .findByIdAndDelete(req.params.id);
//         if (!activity) {
//             return res
//                 .status(404)
//                 .json({ success: false, message: "Activity not found"});
//         }
//         res
//             .status(200)
//             .json({ success: true,
//                     message: "Activity deleted successfully" });
//     } catch (error) {
//         res.status(400).json({ success: false, message: error.message});
//     }
// };
