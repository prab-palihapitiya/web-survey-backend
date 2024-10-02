-- AlterTable
ALTER TABLE "Questionnaire" ADD COLUMN     "templateId" TEXT;

-- CreateTable
CREATE TABLE "DesignTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Untitled Template',
    "obj" JSONB NOT NULL,

    CONSTRAINT "DesignTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDesignTemplate" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,

    CONSTRAINT "UserDesignTemplate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Questionnaire" ADD CONSTRAINT "Questionnaire_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "DesignTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDesignTemplate" ADD CONSTRAINT "UserDesignTemplate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDesignTemplate" ADD CONSTRAINT "UserDesignTemplate_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "DesignTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
