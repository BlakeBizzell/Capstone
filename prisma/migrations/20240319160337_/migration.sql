-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "classValue" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "ac" TEXT NOT NULL,
    "weaknesses" TEXT,
    "goals" TEXT,
    "sheetLink" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
