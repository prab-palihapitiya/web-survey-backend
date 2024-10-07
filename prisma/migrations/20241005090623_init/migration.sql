/*
  Warnings:

  - You are about to drop the `DesignTemplateImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DesignTemplateImage" DROP CONSTRAINT "DesignTemplateImage_designTemplateId_fkey";

-- AlterTable
ALTER TABLE "DesignTemplate" ADD COLUMN     "logoBuffer" BYTEA;

-- DropTable
DROP TABLE "DesignTemplateImage";
