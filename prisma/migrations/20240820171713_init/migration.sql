/*
  Warnings:

  - The `status` column on the `Questionnaire` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('NEW', 'DRAFT', 'ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "Questionnaire" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'NEW';
