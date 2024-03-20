const express = require("express");
const router = express.Router();
const { savePlayerInfo, saveMonsterInfo } = require("../db/saves");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/saves/:userId", async (req, res) => {
  try {
    const userId = (req.params.userId);
    
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

    const userInfo = {
      playerInfo: playerInfo,
      monsterInfo: monsterInfo,
    };

    res.json(userInfo);
  } catch (error) {
    console.error("Error fetching information:", error);
    res.status(500).json({ error: "An error occurred while fetching information." });
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
    res.status(500).json({ error: "An error occurred while saving player information." });
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
    res.status(500).json({ error: "An error occurred while saving monster information." });
  }
});

module.exports = router;
