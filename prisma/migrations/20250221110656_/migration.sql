/*
  Warnings:

  - The primary key for the `domains` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `domains` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `event_uses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `userId` on the `event_uses` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `eventId` on the `event_uses` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `id` on the `event_uses` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `events` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `events` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `domainId` on the `events` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `form_section_fields` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `form_section_fields` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `form_id` on the `form_section_fields` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `form_section_id` on the `form_section_fields` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `form_sections` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `form_sections` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `form_id` on the `form_sections` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `forms` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `forms` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `event_id` on the `forms` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `roles` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `users` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `roleId` on the `users` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `event_uses` DROP FOREIGN KEY `event_uses_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `event_uses` DROP FOREIGN KEY `event_uses_userId_fkey`;

-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `events_domainId_fkey`;

-- DropForeignKey
ALTER TABLE `form_section_fields` DROP FOREIGN KEY `form_section_fields_form_id_fkey`;

-- DropForeignKey
ALTER TABLE `form_section_fields` DROP FOREIGN KEY `form_section_fields_form_section_id_fkey`;

-- DropForeignKey
ALTER TABLE `form_sections` DROP FOREIGN KEY `form_sections_form_id_fkey`;

-- DropForeignKey
ALTER TABLE `forms` DROP FOREIGN KEY `forms_event_id_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_roleId_fkey`;

-- DropIndex
DROP INDEX `event_uses_eventId_fkey` ON `event_uses`;

-- DropIndex
DROP INDEX `events_domainId_fkey` ON `events`;

-- DropIndex
DROP INDEX `form_section_fields_form_id_fkey` ON `form_section_fields`;

-- DropIndex
DROP INDEX `form_section_fields_form_section_id_fkey` ON `form_section_fields`;

-- DropIndex
DROP INDEX `form_sections_form_id_fkey` ON `form_sections`;

-- DropIndex
DROP INDEX `forms_event_id_fkey` ON `forms`;

-- DropIndex
DROP INDEX `users_roleId_fkey` ON `users`;

-- AlterTable
ALTER TABLE `domains` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `event_uses` DROP PRIMARY KEY,
    MODIFY `userId` INTEGER NOT NULL,
    MODIFY `eventId` INTEGER NOT NULL,
    MODIFY `id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`userId`, `eventId`);

-- AlterTable
ALTER TABLE `events` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `domainId` INTEGER NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `form_section_fields` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `form_id` INTEGER NULL,
    MODIFY `form_section_id` INTEGER NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `form_sections` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `form_id` INTEGER NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `forms` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `event_id` INTEGER NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `roles` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `roleId` INTEGER NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_domainId_fkey` FOREIGN KEY (`domainId`) REFERENCES `domains`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_uses` ADD CONSTRAINT `event_uses_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_uses` ADD CONSTRAINT `event_uses_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `forms` ADD CONSTRAINT `forms_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `form_sections` ADD CONSTRAINT `form_sections_form_id_fkey` FOREIGN KEY (`form_id`) REFERENCES `forms`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `form_section_fields` ADD CONSTRAINT `form_section_fields_form_id_fkey` FOREIGN KEY (`form_id`) REFERENCES `forms`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `form_section_fields` ADD CONSTRAINT `form_section_fields_form_section_id_fkey` FOREIGN KEY (`form_section_id`) REFERENCES `form_sections`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
