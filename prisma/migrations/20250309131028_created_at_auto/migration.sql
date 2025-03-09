/*
  Warnings:

  - You are about to drop the column `createdAt` on the `categorys` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `categorys` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `email_contents` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `email_contents` table. All the data in the column will be lost.
  - You are about to alter the column `createdAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `updated_at` to the `categorys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `email_contents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `quiz_topics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categorys` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `contact` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `email_contents` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `form_field_choices` MODIFY `createdAt` DATETIME NULL,
    MODIFY `updatedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `quiz_topics` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;
