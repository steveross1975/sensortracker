const express = require("express");
const router = express.Router();
const sensorLayoutController = require("../controllers/sensorLayoutController");

router.post("/", sensorLayoutController.createLayout);

router.get("/:id", sensorLayoutController.getLayout);

router.put("/:id", sensorLayoutController.updateLayout);

router.delete("/:id", sensorLayoutController.deleteLayout);

module.exports = router;