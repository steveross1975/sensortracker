const express = require("express");
const router = express.Router();
const sensorMatController = require("../controllers/sensorMatController");

router.post("/", sensorMatController.createMat);

router.get("/:id", sensorMatController.getMat);

router.put("/:id", sensorMatController.updateMat);

router.delete("/:id", sensorMatController.deleteMat);

module.exports = router;