/*
  Warnings:

  - You are about to drop the column `endDate` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `eventAgendaDescription` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `hasAboutPage` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `hasContactPage` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `hasGallery` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `hasInfo` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `hideForum` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `hideRegistrationButton` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `landingPageContent` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `logoMeta` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `onlyLandingPage` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `protectedGallery` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `templateVersion` on the `events` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `endDate`,
    DROP COLUMN `eventAgendaDescription`,
    DROP COLUMN `hasAboutPage`,
    DROP COLUMN `hasContactPage`,
    DROP COLUMN `hasGallery`,
    DROP COLUMN `hasInfo`,
    DROP COLUMN `hideForum`,
    DROP COLUMN `hideRegistrationButton`,
    DROP COLUMN `landingPageContent`,
    DROP COLUMN `logoMeta`,
    DROP COLUMN `onlyLandingPage`,
    DROP COLUMN `protectedGallery`,
    DROP COLUMN `templateVersion`,
    ADD COLUMN `PageContent` TEXT NULL,
    ADD COLUMN `hideAboutPage` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `hideCategory` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `hideCourses` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `hideGallery` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `hideInfo` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `hideTeacherPage` BOOLEAN NULL DEFAULT false,
    MODIFY `publishableKey` VARCHAR(255) NULL DEFAULT '',
    MODIFY `secretKey` VARCHAR(255) NULL DEFAULT '';
