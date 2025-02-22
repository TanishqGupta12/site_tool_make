/*
  Warnings:

  - You are about to drop the column `Gallery` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `GalleryTest` on the `events` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `Gallery`,
    DROP COLUMN `GalleryTest`,
    ADD COLUMN `gallery` VARCHAR(255) NULL,
    ADD COLUMN `galleryTest` VARCHAR(255) NULL;
