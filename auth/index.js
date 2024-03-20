const express = require("express");
const router = express.Router();

router.use("/", require("./users"));
router.use("/", require("./saves"));
router.use("/", require("./cart"));
router.use("/", require("./feedback"));

module.exports = router;
