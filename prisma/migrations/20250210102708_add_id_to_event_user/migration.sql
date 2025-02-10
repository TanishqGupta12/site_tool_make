/*
  Warnings:

  - Added the required column `id` to the `event_uses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event_uses` ADD COLUMN `id` BIGINT NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `email` VARCHAR(255) NULL,
    MODIFY `encrypted_password` VARCHAR(255) NULL;
