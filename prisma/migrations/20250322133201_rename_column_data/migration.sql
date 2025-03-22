/*
  Warnings:

  - You are about to drop the column `category_id` on the `captions` table. All the data in the column will be lost.
  - You are about to drop the `categorys` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `captions` DROP FOREIGN KEY `captions_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `categorys` DROP FOREIGN KEY `categorys_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `eventagenda` DROP FOREIGN KEY `EventAgenda_category_id_fkey`;

-- DropIndex
DROP INDEX `captions_category_id_fkey` ON `captions`;

-- AlterTable
ALTER TABLE `captions` DROP COLUMN `category_id`,
    ADD COLUMN `categoryId` INTEGER NULL;

-- DropTable
DROP TABLE `categorys`;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` TEXT NULL,
    `eventId` INTEGER NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    INDEX `category_eventId_fkey`(`eventId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `categories` ADD CONSTRAINT `categories_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventAgenda` ADD CONSTRAINT `EventAgenda_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `captions` ADD CONSTRAINT `captions_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
