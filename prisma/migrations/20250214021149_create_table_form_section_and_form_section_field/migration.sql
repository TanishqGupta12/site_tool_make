-- CreateTable
CREATE TABLE `form_sections` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `caption` VARCHAR(255) NULL,
    `section_hint` TEXT NULL,
    `form_id` BIGINT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `sequence` INTEGER NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `is_payment_section` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `form_section_fields` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `caption` TEXT NULL,
    `placeholder` VARCHAR(255) NULL,
    `field_hint` TEXT NULL,
    `field_type` VARCHAR(255) NULL,
    `data_field` VARCHAR(255) NULL,
    `sequence` INTEGER NULL,
    `is_required` BOOLEAN NOT NULL DEFAULT false,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `form_id` BIGINT NULL,
    `form_section_id` BIGINT NULL,
    `file_upload_filed` BOOLEAN NULL DEFAULT false,
    `file_upload_type` VARCHAR(255) NULL DEFAULT 'image/jpeg,image/jpg,image/png,application/pdf,application/msword,application/mspowerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.openxmlformats-officedocument.wordprocessingml.document,audio/*,video/*',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `form_sections` ADD CONSTRAINT `form_sections_form_id_fkey` FOREIGN KEY (`form_id`) REFERENCES `forms`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `form_section_fields` ADD CONSTRAINT `form_section_fields_form_id_fkey` FOREIGN KEY (`form_id`) REFERENCES `forms`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `form_section_fields` ADD CONSTRAINT `form_section_fields_form_section_id_fkey` FOREIGN KEY (`form_section_id`) REFERENCES `form_sections`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
