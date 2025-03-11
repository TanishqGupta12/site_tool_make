/*
  Warnings:

  - You are about to alter the column `createdAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `category_id` on the `quiz_topics` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `quiz_topics` table. All the data in the column will be lost.
  - You are about to drop the column `event_id` on the `quiz_topics` table. All the data in the column will be lost.
  - You are about to drop the column `has_download_certificate` on the `quiz_topics` table. All the data in the column will be lost.
  - You are about to drop the column `has_pass_fail_page` on the `quiz_topics` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `quiz_topics` table. All the data in the column will be lost.
  - You are about to drop the column `is_paid` on the `quiz_topics` table. All the data in the column will be lost.
  - You are about to drop the column `max_attempts` on the `quiz_topics` table. All the data in the column will be lost.
  - You are about to drop the column `passing_points` on the `quiz_topics` table. All the data in the column will be lost.
  - You are about to drop the column `total_marks` on the `quiz_topics` table. All the data in the column will be lost.
  - You are about to drop the column `valid_from` on the `quiz_topics` table. All the data in the column will be lost.
  - You are about to drop the column `valid_upto` on the `quiz_topics` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `quiz_topics` DROP FOREIGN KEY `quiz_topics_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `quiz_topics` DROP FOREIGN KEY `quiz_topics_event_id_fkey`;

-- DropIndex
DROP INDEX `quiz_topics_category_id_fkey` ON `quiz_topics`;

-- DropIndex
DROP INDEX `quiz_topics_event_id_fkey` ON `quiz_topics`;

-- AlterTable
ALTER TABLE `form_field_choices` MODIFY `createdAt` DATETIME NULL,
    MODIFY `updatedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `quiz_topics` DROP COLUMN `category_id`,
    DROP COLUMN `duration`,
    DROP COLUMN `event_id`,
    DROP COLUMN `has_download_certificate`,
    DROP COLUMN `has_pass_fail_page`,
    DROP COLUMN `is_active`,
    DROP COLUMN `is_paid`,
    DROP COLUMN `max_attempts`,
    DROP COLUMN `passing_points`,
    DROP COLUMN `total_marks`,
    DROP COLUMN `valid_from`,
    DROP COLUMN `valid_upto`,
    ADD COLUMN `event_agenda_id` INTEGER NULL,
    MODIFY `description` VARCHAR(255) NULL;

-- CreateTable
CREATE TABLE `EventAgenda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `duration` VARCHAR(255) NULL,
    `category_id` INTEGER NULL,
    `event_id` INTEGER NULL,
    `has_download_certificate` BOOLEAN NOT NULL DEFAULT false,
    `is_paid` BOOLEAN NOT NULL DEFAULT false,
    `total_marks` DOUBLE NOT NULL DEFAULT 0,
    `passing_points` DOUBLE NULL DEFAULT 0,
    `has_pass_fail_page` BOOLEAN NOT NULL DEFAULT false,
    `max_attempts` INTEGER NULL DEFAULT 0,
    `valid_from` DATETIME(3) NULL,
    `valid_upto` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EventAgenda` ADD CONSTRAINT `EventAgenda_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categorys`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventAgenda` ADD CONSTRAINT `EventAgenda_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_topics` ADD CONSTRAINT `quiz_topics_event_agenda_id_fkey` FOREIGN KEY (`event_agenda_id`) REFERENCES `EventAgenda`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
