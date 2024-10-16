const express = require("express");
const router = express.Router();
const sensorLayoutController = require("../controllers/sensorLayoutController");

router.post("/activity", sensorLayoutController.createLayout);

router.get("/activity/:id", sensorLayoutController.getLayout);

router.put("/activity/:id", sensorLayoutController.updateLayout);

router.delete("/activity/:id", sensorLayoutController.deleteLayout);

module.exports = router;