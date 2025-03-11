/*
  Warnings:

  - You are about to alter the column `createdAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `embedded_video` on the `quiz_topics` table. All the data in the column will be lost.
  - You are about to drop the column `quiz_topic_id` on the `trickets` table. All the data in the column will be lost.
  - You are about to drop the column `quiz_topic_id` on the `user_notes` table. All the data in the column will be lost.
  - You are about to drop the column `quiz_topic_id` on the `user_tickets` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `trickets` DROP FOREIGN KEY `trickets_quiz_topic_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_notes` DROP FOREIGN KEY `user_notes_quiz_topic_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_tickets` DROP FOREIGN KEY `user_tickets_quiz_topic_id_fkey`;

-- DropIndex
DROP INDEX `trickets_quiz_topic_id_fkey` ON `trickets`;

-- DropIndex
DROP INDEX `user_notes_quiz_topic_id_fkey` ON `user_notes`;

-- DropIndex
DROP INDEX `user_tickets_quiz_topic_id_fkey` ON `user_tickets`;

-- AlterTable
ALTER TABLE `form_field_choices` MODIFY `createdAt` DATETIME NULL,
    MODIFY `updatedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `quiz_topics` DROP COLUMN `embedded_video`;

-- AlterTable
ALTER TABLE `trickets` DROP COLUMN `quiz_topic_id`,
    ADD COLUMN `event_agenda_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `user_notes` DROP COLUMN `quiz_topic_id`,
    ADD COLUMN `event_agenda_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `user_tickets` DROP COLUMN `quiz_topic_id`,
    ADD COLUMN `event_agenda_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `trickets` ADD CONSTRAINT `trickets_event_agenda_id_fkey` FOREIGN KEY (`event_agenda_id`) REFERENCES `EventAgenda`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_notes` ADD CONSTRAINT `user_notes_event_agenda_id_fkey` FOREIGN KEY (`event_agenda_id`) REFERENCES `EventAgenda`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_tickets` ADD CONSTRAINT `user_tickets_event_agenda_id_fkey` FOREIGN KEY (`event_agenda_id`) REFERENCES `EventAgenda`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
