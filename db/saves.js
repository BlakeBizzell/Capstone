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

async function saveRandomName(userId, randomNameData) {
    try {
        const { race, firstName, lastName } = randomNameData;

        await prisma.randomName.create({
            data: {
                race,
                firstName,
                lastName,
                userId,
            },
        });

        return { success: true, message: "Random name information saved successfully." };
    } catch (error) {
        console.error("Error saving random name information:", error);
        return { success: false, error: "An error occurred while saving random name information." };
    }
}

async function saveTreasureInfo(userId, treasureData) {
    try {
        const { type, name, amount, unit } = treasureData;

        await prisma.treasureInfo.create({
            data: {
                type,
                name,
                amount,
                unit,
                userId,
            },
        });

        return { success: true, message: "Treasure information saved successfully." };
    } catch (error) {
        console.error("Error saving treasure information:", error);
        return { success: false, error: "An error occurred while saving treasure information." };
    }
}

module.exports = {
    savePlayerInfo,
    saveMonsterInfo,
    saveRandomName,
    saveTreasureInfo, // Export the new function
};
