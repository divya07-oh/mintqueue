const express = require("express");
const router = express.Router();
const queueController = require("../controllers/queueController.js");
router.post("/join", queueController.joinQueue);
router.get("/all", queueController.getQueue);
router.put("/serve", queueController.serveNext);
module.exports = router;