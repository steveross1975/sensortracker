const express = require("express");
const router = express.Router();
const uVPController = require("../controllers/uVPController");

router.post("/measurement", uVPController.createUVP);

router.get("/measurement/:id", uVPController.getUVP);

module.exports = router;