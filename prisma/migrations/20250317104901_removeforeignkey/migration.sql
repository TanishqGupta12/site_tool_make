/*
  Warnings:

  - You are about to drop the column `event_id` on the `captions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `captions` DROP FOREIGN KEY `captions_event_id_fkey`;

-- DropIndex
DROP INDEX `captions_event_id_fkey` ON `captions`;

-- AlterTable
ALTER TABLE `captions` DROP COLUMN `event_id`,
    ADD COLUMN `category_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `captions` ADD CONSTRAINT `captions_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categorys`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
