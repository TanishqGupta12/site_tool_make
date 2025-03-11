/*
  Warnings:

  - You are about to alter the column `createdAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `form_field_choices` MODIFY `createdAt` DATETIME NULL,
    MODIFY `updatedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `trickets` ADD COLUMN `quiz_topic_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `trickets` ADD CONSTRAINT `trickets_quiz_topic_id_fkey` FOREIGN KEY (`quiz_topic_id`) REFERENCES `quiz_topics`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
