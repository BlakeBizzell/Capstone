const express = require("express");
const router = express.Router();
const {
  savePlayerInfo,
  saveMonsterInfo,
  saveRandomName,
  saveTreasureInfo,
} = require("../db/saves"); // Import saveTreasureInfo function
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/saves/:userId", async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    const playerInfo = await prisma.player.findMany({
      where: {
        userId: userId,
      },
    });

    const monsterInfo = await prisma.monsterInfo.findMany({
      where: {
        userId: userId,
      },
    });

    const randomNameInfo = await prisma.randomName.findMany({
      where: {
        userId: userId,
      },
    });

    const treasureInfo = await prisma.treasureInfo.findMany({
      where: {
        userId: userId,
      },
    });

    const userInfo = {
      playerInfo: playerInfo,
      monsterInfo: monsterInfo,
      randomNameInfo: randomNameInfo,
      treasureInfo: treasureInfo,
    };

    res.json(userInfo);
  } catch (error) {
    console.error("Error fetching information:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching information." });
  }
});

router.post("/saves", async (req, res) => {
  try {
    const userId = req.body.userId;
    const playerData = req.body;

    const saveResult = await savePlayerInfo(userId, playerData);

    if (saveResult.success) {
      res.status(201).json({ message: saveResult.message });
    } else {
      res.status(500).json({ error: saveResult.error });
    }
  } catch (error) {
    console.error("Error saving player information:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving player information." });
  }
});

router.post("/monster-saves", async (req, res) => {
  try {
    const userId = req.body.userId;
    const monsterData = req.body;

    const saveResult = await saveMonsterInfo(userId, monsterData);

    if (saveResult.success) {
      res.status(201).json({ message: saveResult.message });
    } else {
      res.status(500).json({ error: saveResult.error });
    }
  } catch (error) {
    console.error("Error saving monster information:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving monster information." });
  }
});

router.post("/random-name-saves", async (req, res) => {
  try {
    const userId = req.body.userId;
    const randomNameData = req.body;

    const saveResult = await saveRandomName(userId, randomNameData);

    if (saveResult.success) {
      res.status(201).json({ message: saveResult.message });
    } else {
      res.status(500).json({ error: saveResult.error });
    }
  } catch (error) {
    console.error("Error saving random name information:", error);
    res
      .status(500)
      .json({
        error: "An error occurred while saving random name information.",
      });
  }
});

router.post("/treasure-saves", async (req, res) => {
  // Added route for saving treasure information
  try {
    const userId = req.body.userId;
    const treasureData = req.body;

    const saveResult = await saveTreasureInfo(userId, treasureData);

    if (saveResult.success) {
      res.status(201).json({ message: saveResult.message });
    } else {
      res.status(500).json({ error: saveResult.error });
    }
  } catch (error) {
    console.error("Error saving treasure information:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving treasure information." });
  }
});

module.exports = router;
