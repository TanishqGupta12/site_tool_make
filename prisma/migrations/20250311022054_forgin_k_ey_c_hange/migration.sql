/*
  Warnings:

  - You are about to alter the column `createdAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `quiz_attempt_id` on the `quiz_attempt_results` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `quiz_attempt_results` DROP FOREIGN KEY `quiz_attempt_results_quiz_attempt_id_fkey`;

-- DropIndex
DROP INDEX `quiz_attempt_results_quiz_attempt_id_fkey` ON `quiz_attempt_results`;

-- AlterTable
ALTER TABLE `form_field_choices` MODIFY `createdAt` DATETIME NULL,
    MODIFY `updatedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `quiz_attempt_results` DROP COLUMN `quiz_attempt_id`;

-- AlterTable
ALTER TABLE `quiz_attempts` ADD COLUMN `quiz_attempt_result_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `quiz_attempts` ADD CONSTRAINT `quiz_attempts_quiz_attempt_result_id_fkey` FOREIGN KEY (`quiz_attempt_result_id`) REFERENCES `quiz_attempt_results`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
