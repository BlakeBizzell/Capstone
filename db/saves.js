const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function savePlayerInfo(userId, playerData) {
    try {
        const { name, race, classValue, level, ac, weaknesses, goals, sheetLink } = playerData;

        await prisma.player.create({
            data: {
                name,
                race,
                classValue,
                level: Number(level),
                ac,
                weaknesses,
                goals,
                sheetLink,
                userId,
            },
        });

        return { success: true, message: "Player information saved successfully." };
    } catch (error) {
        console.error("Error saving player information:", error);
        return { success: false, error: "An error occurred while saving player information." };
    }
}

async function saveMonsterInfo(userId, monsterData) {
    try {
        const { name, challengeRating, hitPoints } = monsterData;

        await prisma.monsterInfo.create({
            data: {
                name,
                challengeRating,
                hitPoints,
                userId,
            },
        });

        return { success: true, message: "Monster information saved successfully." };
    } catch (error) {
        console.error("Error saving monster information:", error);
        return { success: false, error: "An error occurred while saving monster information." };
    }
}

module.exports = {
    savePlayerInfo,
    saveMonsterInfo,
};
