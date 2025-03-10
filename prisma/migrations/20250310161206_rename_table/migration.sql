/*
  Warnings:

  - You are about to alter the column `createdAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `answer` on the `quiz_attempts` table. All the data in the column will be lost.
  - You are about to drop the column `question` on the `quiz_attempts` table. All the data in the column will be lost.
  - You are about to drop the column `quiz_topic_id` on the `quiz_attempts` table. All the data in the column will be lost.
  - You are about to drop the `quiz_attempt_logs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `quiz_attempt_logs` DROP FOREIGN KEY `quiz_attempt_logs_quiz_attempt_result_id_fkey`;

-- DropForeignKey
ALTER TABLE `quiz_attempt_logs` DROP FOREIGN KEY `quiz_attempt_logs_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `quiz_attempts` DROP FOREIGN KEY `quiz_attempts_quiz_topic_id_fkey`;

-- DropForeignKey
ALTER TABLE `quiz_results` DROP FOREIGN KEY `quiz_results_quiz_attempt_id_fkey`;

-- DropIndex
DROP INDEX `quiz_attempts_quiz_topic_id_fkey` ON `quiz_attempts`;

-- DropIndex
DROP INDEX `quiz_results_quiz_attempt_id_fkey` ON `quiz_results`;

-- AlterTable
ALTER TABLE `form_field_choices` MODIFY `createdAt` DATETIME NULL,
    MODIFY `updatedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `quiz_attempts` DROP COLUMN `answer`,
    DROP COLUMN `question`,
    DROP COLUMN `quiz_topic_id`,
    ADD COLUMN `is_pass` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `marks_gained` DOUBLE NULL,
    ADD COLUMN `time_spent` INTEGER NULL;

-- DropTable
DROP TABLE `quiz_attempt_logs`;

-- CreateTable
CREATE TABLE `quiz_attempt_results` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `quiz_topic_id` INTEGER NULL,
    `question` TEXT NULL,
    `answer` TEXT NULL,
    `quiz_attempt_id` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `quiz_attempt_results` ADD CONSTRAINT `quiz_attempt_results_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_attempt_results` ADD CONSTRAINT `quiz_attempt_results_quiz_topic_id_fkey` FOREIGN KEY (`quiz_topic_id`) REFERENCES `quiz_topics`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_attempt_results` ADD CONSTRAINT `quiz_attempt_results_quiz_attempt_id_fkey` FOREIGN KEY (`quiz_attempt_id`) REFERENCES `quiz_attempts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_results` ADD CONSTRAINT `quiz_results_quiz_attempt_id_fkey` FOREIGN KEY (`quiz_attempt_id`) REFERENCES `quiz_attempts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
