/*
  Warnings:

  - You are about to drop the column `active` on the `Questionnaire` table. All the data in the column will be lost.
  - Added the required column `status` to the `Questionnaire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Questionnaire" DROP COLUMN "active",
ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'Untitled Questionnaire',
ADD COLUMN     "status" TEXT NOT NULL,
ALTER COLUMN "modifiedAt" DROP DEFAULT;
