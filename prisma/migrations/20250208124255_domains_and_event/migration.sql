/*
  Warnings:

  - The primary key for the `domains` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `updatedAt` to the `domains` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `domains` DROP PRIMARY KEY,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `events` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `domainId` BIGINT NULL,
    `description` TEXT NULL,
    `startDate` DATETIME(3) NULL,
    `hasGallery` BOOLEAN NULL,
    `hasInfo` BOOLEAN NULL,
    `hasAboutPage` BOOLEAN NULL,
    `hasContactPage` BOOLEAN NULL,
    `slug` VARCHAR(191) NULL,
    `latitude` DECIMAL(12, 6) NULL,
    `longitude` DECIMAL(12, 6) NULL,
    `endDate` DATETIME(3) NULL,
    `email` VARCHAR(255) NULL,
    `phone` VARCHAR(255) NULL,
    `logoMeta` VARCHAR(255) NULL,
    `timeZone` VARCHAR(255) NULL DEFAULT 'Singapore',
    `customCss` TEXT NULL,
    `customJs` TEXT NULL,
    `termsAndConditions` LONGTEXT NULL,
    `protectedGallery` BOOLEAN NULL DEFAULT false,
    `paymentNeeded` BOOLEAN NULL DEFAULT false,
    `publishableKey` VARCHAR(255) NULL DEFAULT 'pk_test_Hcw63Hd14F3WqABmHCZxfjqn',
    `secretKey` VARCHAR(255) NULL DEFAULT 'sk_test_1UhxGTUteWDoPbS1aCAHQTd4',
    `templateVersion` VARCHAR(255) NULL,
    `eventAgendaDescription` TEXT NULL,
    `landingPageContent` TEXT NULL,
    `onlyLandingPage` BOOLEAN NULL DEFAULT false,
    `hideRegistrationButton` BOOLEAN NULL DEFAULT false,
    `sendRegistrationConfirmationEmailToGuest` BOOLEAN NULL DEFAULT false,
    `footerText` TEXT NULL,
    `hideBlog` BOOLEAN NULL DEFAULT false,
    `hideForum` BOOLEAN NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_domainId_fkey` FOREIGN KEY (`domainId`) REFERENCES `domains`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
