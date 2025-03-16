/*
  Warnings:

  - You are about to drop the column `latitude` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `events` table. All the data in the column will be lost.
  - Made the column `name` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `domainId` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `timeZone` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `termsAndConditions` on table `events` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `events_domainId_fkey`;

-- AlterTable
ALTER TABLE `events` DROP COLUMN `latitude`,
    DROP COLUMN `longitude`,
    ADD COLUMN `address` TEXT NULL,
    MODIFY `name` VARCHAR(255) NOT NULL,
    MODIFY `domainId` INTEGER NOT NULL,
    MODIFY `description` TEXT NOT NULL,
    MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `phone` VARCHAR(255) NOT NULL,
    MODIFY `timeZone` VARCHAR(255) NOT NULL DEFAULT 'Singapore',
    MODIFY `termsAndConditions` LONGTEXT NOT NULL;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_domainId_fkey` FOREIGN KEY (`domainId`) REFERENCES `domains`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
