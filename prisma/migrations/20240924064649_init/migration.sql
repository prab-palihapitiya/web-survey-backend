/*
  Warnings:

  - You are about to drop the `UserDesignTemplate` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `DesignTemplate` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserDesignTemplate" DROP CONSTRAINT "UserDesignTemplate_templateId_fkey";

-- DropForeignKey
ALTER TABLE "UserDesignTemplate" DROP CONSTRAINT "UserDesignTemplate_userId_fkey";

-- AlterTable
ALTER TABLE "DesignTemplate" ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserDesignTemplate";

-- AddForeignKey
ALTER TABLE "DesignTemplate" ADD CONSTRAINT "DesignTemplate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
