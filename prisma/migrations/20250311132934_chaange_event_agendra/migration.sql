/*
  Warnings:

  - You are about to alter the column `createdAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `is_pass` on the `quiz_attempts` table. All the data in the column will be lost.
  - You are about to drop the column `time_spent` on the `quiz_attempts` table. All the data in the column will be lost.
  - You are about to drop the column `check_to_enable_other_field` on the `quiz_question_options` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `quiz_question_options` table. All the data in the column will be lost.
  - You are about to drop the column `marks_scored` on the `quiz_results` table. All the data in the column will be lost.
  - You are about to alter the column `points` on the `quiz_results` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Double`.

*/
-- AlterTable
ALTER TABLE `form_field_choices` MODIFY `createdAt` DATETIME NULL,
    MODIFY `updatedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `quiz_attempt_results` ADD COLUMN `is_right` DOUBLE NULL,
    ADD COLUMN `is_wrong` DOUBLE NULL;

-- AlterTable
ALTER TABLE `quiz_attempts` DROP COLUMN `is_pass`,
    DROP COLUMN `time_spent`;

-- AlterTable
ALTER TABLE `quiz_question_options` DROP COLUMN `check_to_enable_other_field`,
    DROP COLUMN `points`;

-- AlterTable
ALTER TABLE `quiz_results` DROP COLUMN `marks_scored`,
    ADD COLUMN `event_agenda_id` INTEGER NULL,
    MODIFY `points` DOUBLE NULL;

-- AddForeignKey
ALTER TABLE `quiz_results` ADD CONSTRAINT `quiz_results_event_agenda_id_fkey` FOREIGN KEY (`event_agenda_id`) REFERENCES `EventAgenda`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
