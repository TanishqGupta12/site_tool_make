/*
  Warnings:

  - You are about to alter the column `createdAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `form_field_choices` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `form_field_choices` MODIFY `createdAt` DATETIME NULL,
    MODIFY `updatedAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `user_tickets` ADD COLUMN `Tricket_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `user_tickets` ADD CONSTRAINT `user_tickets_Tricket_id_fkey` FOREIGN KEY (`Tricket_id`) REFERENCES `trickets`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
