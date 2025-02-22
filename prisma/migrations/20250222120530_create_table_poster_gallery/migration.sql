/*
  Warnings:

  - You are about to drop the column `gallery` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `galleryTest` on the `events` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `gallery`,
    DROP COLUMN `galleryTest`,
    ADD COLUMN `galleryText` VARCHAR(255) NULL;

-- CreateTable
CREATE TABLE `post_galleries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `poster` VARCHAR(255) NULL,
    `event_id` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `post_galleries` ADD CONSTRAINT `post_galleries_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
