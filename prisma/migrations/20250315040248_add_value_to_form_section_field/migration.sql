/*
  Warnings:

  - You are about to drop the column `negative_marks` on the `eventagenda` table. All the data in the column will be lost.
  - You are about to alter the column `correct_answer_explanation` on the `quiz_questions` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `Text`.
  - Made the column `is_active` on table `eventagenda` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_paid` on table `eventagenda` required. This step will fail if there are existing NULL values in that column.
  - Made the column `total_marks` on table `eventagenda` required. This step will fail if there are existing NULL values in that column.
  - Made the column `has_pass_fail_page` on table `eventagenda` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `eventagenda` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `eventagenda` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `quiz_attempt_results` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `quiz_attempt_results` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `quiz_attempts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `quiz_attempts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `quiz_question_options` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_right` on table `quiz_question_options` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_last_option` on table `quiz_question_options` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `quiz_question_options` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `quiz_question_options` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `quiz_questions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `quiz_questions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `quiz_questions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_required` on table `quiz_questions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `quiz_results` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `quiz_results` required. This step will fail if there are existing NULL values in that column.
  - Made the column `practise_quiz` on table `quiz_topics` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `quiz_topics` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `quiz_topics` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `user_courses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `completed` on table `user_courses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `user_courses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `user_courses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `user_notes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `eventId` on table `user_notes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `user_notes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `user_notes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `user_tickets` required. This step will fail if there are existing NULL values in that column.
  - Made the column `eventId` on table `user_tickets` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `user_tickets` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `user_tickets` required. This step will fail if there are existing NULL values in that column.

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
ALTER TABLE `eventagenda` DROP COLUMN `negative_marks`,
    MODIFY `is_active` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `is_paid` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `total_marks` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `has_pass_fail_page` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `form_section_fields` ADD COLUMN `onlyReady` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `value` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `quiz_attempt_results` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `quiz_attempts` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `quiz_question_options` MODIFY `title` TEXT NOT NULL,
    MODIFY `is_right` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `is_last_option` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `quiz_questions` ADD COLUMN `negative_marks` DOUBLE NULL,
    MODIFY `title` TEXT NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL,
    MODIFY `is_required` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `correct_answer_explanation` TEXT NULL;

-- AlterTable
ALTER TABLE `quiz_results` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `quiz_topics` MODIFY `practise_quiz` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `user_courses` MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `completed` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `user_notes` MODIFY `userId` INTEGER NOT NULL,
    MODIFY `eventId` INTEGER NOT NULL,
    MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `user_tickets` MODIFY `userId` INTEGER NOT NULL,
    MODIFY `eventId` INTEGER NOT NULL,
    MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL;
