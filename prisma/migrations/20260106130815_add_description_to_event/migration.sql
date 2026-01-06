/*
  Warnings:

  - The primary key for the `_UserEvents` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[A,B]` on the table `_UserEvents` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "_UserEvents" DROP CONSTRAINT "_UserEvents_AB_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "_UserEvents_AB_unique" ON "_UserEvents"("A", "B");
