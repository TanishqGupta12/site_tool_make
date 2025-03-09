/*
  Warnings:

  - You are about to drop the column `roleId` on the `categorys` table. All the data in the column will be lost.
  - You are about to alter the column `createdAt` on the `contact` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `contact` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `createdAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `categorys` DROP COLUMN `roleId`;

-- AlterTable
ALTER TABLE `contact` MODIFY `createdAt` DATETIME NULL,
    MODIFY `updatedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `form_field_choices` MODIFY `createdAt` DATETIME NULL,
    MODIFY `updatedAt` DATETIME NULL;

-- CreateTable
CREATE TABLE `quiz_topics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_id` INTEGER NULL,
    `event_id` INTEGER NULL,
    `title` VARCHAR(255) NULL,
    `description` VARCHAR(191) NULL,
    `is_paid` BOOLEAN NOT NULL DEFAULT false,
    `sequence` INTEGER NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `has_download_certificate` BOOLEAN NOT NULL DEFAULT false,
    `total_marks` DOUBLE NOT NULL DEFAULT 0,
    `passing_points` DOUBLE NULL DEFAULT 0,
    `has_pass_fail_page` BOOLEAN NOT NULL DEFAULT false,
    `embedded_video` VARCHAR(191) NULL,
    `duration` VARCHAR(255) NULL,
    `valid_from` DATETIME(3) NULL,
    `valid_upto` DATETIME(3) NULL,
    `max_attempts` INTEGER NULL DEFAULT 0,
    `practise_quiz` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_questions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sequence` INTEGER NULL,
    `title` TEXT NOT NULL,
    `question_type` VARCHAR(255) NULL,
    `quiz_topic_id` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `wrong_answer_explanation` TEXT NULL,
    `is_required` BOOLEAN NOT NULL DEFAULT false,
    `correct_answer_explanation` TEXT NULL,
    `marks` DOUBLE NULL,
    `negative_marks` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_question_options` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` TEXT NOT NULL,
    `is_right` BOOLEAN NOT NULL DEFAULT false,
    `is_last_option` BOOLEAN NOT NULL DEFAULT false,
    `points` VARCHAR(255) NULL,
    `quiz_question_id` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `check_to_enable_other_field` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_attempts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `quiz_topic_id` INTEGER NULL,
    `question` TEXT NULL,
    `answer` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_attempt_logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `quiz_attempt_result_id` INTEGER NULL,
    `marks_gained` DOUBLE NULL,
    `is_pass` BOOLEAN NULL DEFAULT false,
    `time_spent` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_results` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `marks_scored` DOUBLE NULL,
    `is_pass` BOOLEAN NULL DEFAULT false,
    `quiz_attempt_id` INTEGER NULL,
    `points` VARCHAR(255) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `quiz_topics` ADD CONSTRAINT `quiz_topics_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categorys`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_topics` ADD CONSTRAINT `quiz_topics_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_questions` ADD CONSTRAINT `quiz_questions_quiz_topic_id_fkey` FOREIGN KEY (`quiz_topic_id`) REFERENCES `quiz_topics`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_question_options` ADD CONSTRAINT `quiz_question_options_quiz_question_id_fkey` FOREIGN KEY (`quiz_question_id`) REFERENCES `quiz_questions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_attempts` ADD CONSTRAINT `quiz_attempts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_attempts` ADD CONSTRAINT `quiz_attempts_quiz_topic_id_fkey` FOREIGN KEY (`quiz_topic_id`) REFERENCES `quiz_topics`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_attempt_logs` ADD CONSTRAINT `quiz_attempt_logs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_attempt_logs` ADD CONSTRAINT `quiz_attempt_logs_quiz_attempt_result_id_fkey` FOREIGN KEY (`quiz_attempt_result_id`) REFERENCES `quiz_attempts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_results` ADD CONSTRAINT `quiz_results_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_results` ADD CONSTRAINT `quiz_results_quiz_attempt_id_fkey` FOREIGN KEY (`quiz_attempt_id`) REFERENCES `quiz_attempt_logs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
