/*
  Warnings:

  - You are about to alter the column `createdAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `negative_marks` on the `quiz_questions` table. All the data in the column will be lost.
  - You are about to alter the column `correct_answer_explanation` on the `quiz_questions` table. The data in that column could be lost. The data in that column will be cast from `Text` to `TinyInt`.

*/
-- DropForeignKey
ALTER TABLE `user_courses` DROP FOREIGN KEY `user_courses_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_notes` DROP FOREIGN KEY `user_notes_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `user_notes` DROP FOREIGN KEY `user_notes_userId_fkey`;

-- DropForeignKey
ALTER TABLE `user_tickets` DROP FOREIGN KEY `user_tickets_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `user_tickets` DROP FOREIGN KEY `user_tickets_userId_fkey`;

-- DropIndex
DROP INDEX `user_courses_user_id_fkey` ON `user_courses`;

-- DropIndex
DROP INDEX `user_notes_eventId_fkey` ON `user_notes`;

-- DropIndex
DROP INDEX `user_notes_userId_fkey` ON `user_notes`;

-- DropIndex
DROP INDEX `user_tickets_eventId_fkey` ON `user_tickets`;

-- DropIndex
DROP INDEX `user_tickets_userId_fkey` ON `user_tickets`;

-- AlterTable
ALTER TABLE `categorys` MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `contact` MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `discounts` MODIFY `min_discount` DOUBLE NULL,
    MODIFY `max_discount` DOUBLE NULL,
    MODIFY `valid_from` DATETIME(3) NULL,
    MODIFY `valid_still` DATETIME(3) NULL,
    MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `email_contents` MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `eventagenda` ADD COLUMN `negative_marks` DOUBLE NULL DEFAULT 0,
    MODIFY `is_active` BOOLEAN NULL DEFAULT true,
    MODIFY `is_paid` BOOLEAN NULL DEFAULT false,
    MODIFY `total_marks` DOUBLE NULL DEFAULT 0,
    MODIFY `has_pass_fail_page` BOOLEAN NULL DEFAULT false,
    MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `form_field_choices` MODIFY `createdAt` DATETIME NULL,
    MODIFY `updatedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `quiz_attempt_results` MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `quiz_attempts` MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `quiz_question_options` MODIFY `title` TEXT NULL,
    MODIFY `is_right` BOOLEAN NULL DEFAULT false,
    MODIFY `is_last_option` BOOLEAN NULL DEFAULT false,
    MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `quiz_questions` DROP COLUMN `negative_marks`,
    MODIFY `title` TEXT NULL,
    MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NULL,
    MODIFY `is_required` BOOLEAN NULL DEFAULT false,
    MODIFY `correct_answer_explanation` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `quiz_results` MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `quiz_topics` MODIFY `practise_quiz` BOOLEAN NULL DEFAULT false,
    MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `user_courses` MODIFY `user_id` INTEGER NULL,
    MODIFY `completed` BOOLEAN NULL DEFAULT false,
    MODIFY `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `user_notes` MODIFY `userId` INTEGER NULL,
    MODIFY `eventId` INTEGER NULL,
    MODIFY `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `user_tickets` MODIFY `userId` INTEGER NULL,
    MODIFY `eventId` INTEGER NULL,
    MODIFY `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NULL;

-- AddForeignKey
ALTER TABLE `user_notes` ADD CONSTRAINT `user_notes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_notes` ADD CONSTRAINT `user_notes_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_tickets` ADD CONSTRAINT `user_tickets_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_tickets` ADD CONSTRAINT `user_tickets_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_courses` ADD CONSTRAINT `user_courses_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
