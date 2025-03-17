/*
  Warnings:

  - You are about to drop the `event_uses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `event_uses` DROP FOREIGN KEY `event_uses_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `event_uses` DROP FOREIGN KEY `event_uses_userId_fkey`;

-- DropTable
DROP TABLE `event_uses`;
