-- CreateTable
CREATE TABLE `form_field_choices` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `sequence` INTEGER NULL,
    `caption` VARCHAR(255) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `specificFieldIfOther` BOOLEAN NULL,
    `createdAt` DATETIME NOT NULL,
    `updatedAt` DATETIME NOT NULL,
    `form_section_field_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `form_field_choices` ADD CONSTRAINT `form_field_choices_form_section_field_id_fkey` FOREIGN KEY (`form_section_field_id`) REFERENCES `form_section_fields`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
