/*
  Warnings:

  - You are about to drop the column `team1` on the `Result` table. All the data in the column will be lost.
  - You are about to drop the column `team2` on the `Result` table. All the data in the column will be lost.
  - Added the required column `awayScore` to the `Result` table without a default value. This is not possible if the table is not empty.
  - Added the required column `homeScore` to the `Result` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Result" DROP COLUMN "team1",
DROP COLUMN "team2",
ADD COLUMN     "awayScore" INTEGER NOT NULL,
ADD COLUMN     "homeScore" INTEGER NOT NULL;
