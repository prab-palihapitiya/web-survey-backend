-- CreateTable
CREATE TABLE "DesignTemplateImage" (
    "id" TEXT NOT NULL,
    "designTemplateId" TEXT NOT NULL,
    "imageBuffer" BYTEA NOT NULL,

    CONSTRAINT "DesignTemplateImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DesignTemplateImage" ADD CONSTRAINT "DesignTemplateImage_designTemplateId_fkey" FOREIGN KEY ("designTemplateId") REFERENCES "DesignTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
