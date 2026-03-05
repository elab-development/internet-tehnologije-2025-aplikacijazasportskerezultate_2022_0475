/*
  Warnings:

  - You are about to drop the column `minutes` on the `Statistic` table. All the data in the column will be lost.
  - You are about to drop the column `player` on the `Statistic` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `Statistic` table. All the data in the column will be lost.
  - Added the required column `awayValue` to the `Statistic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `homeValue` to the `Statistic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statName` to the `Statistic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Statistic" DROP COLUMN "minutes",
DROP COLUMN "player",
DROP COLUMN "points",
ADD COLUMN     "awayValue" INTEGER NOT NULL,
ADD COLUMN     "homeValue" INTEGER NOT NULL,
ADD COLUMN     "statName" TEXT NOT NULL;
