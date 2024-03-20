const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function saveFeedback(feedbackData) {
  try {
    const { feedback, screenshots } = feedbackData;

    const createdFeedback = await prisma.feedback.create({
      data: {
        feedback,
        ScreenShots: screenshots, // Convert screenshots array to JSON string
      },
    });

    return {
      success: true,
      message: "Feedback saved successfully.",
      feedbackId: createdFeedback.id,
    };
  } catch (error) {
    console.error("Error saving feedback:", error);
    return {
      success: false,
      error: "An error occurred while saving feedback.",
    };
  }
}

module.exports = {
  saveFeedback,
};
