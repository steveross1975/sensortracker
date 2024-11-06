const express = require("express");
const router = express.Router();
const sensorLayoutController = require("../controllers/userLayoutController");

router.post("/", userLayoutController.createUserLayout);

router.get("/:id", userLayoutController.getUserLayout);

router.put("/:id", userLayoutController.updateUserLayout);

router.delete("/:id", userLayoutController.deleteUserLayout);

module.exports = router;