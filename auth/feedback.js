const express = require("express");
const router = express.Router();
const { saveFeedback } = require("../db/feedback");

router.post("/feedback", async (req, res) => {
  try {
    const feedbackData = req.body;

    const saveResult = await saveFeedback(feedbackData);

    if (saveResult.success) {
      res
        .status(201)
        .json({
          message: saveResult.message,
          feedbackId: saveResult.feedbackId,
        });
    } else {
      res.status(500).json({ error: saveResult.error });
    }
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ error: "An error occurred while saving feedback." });
  }
});

module.exports = router;
