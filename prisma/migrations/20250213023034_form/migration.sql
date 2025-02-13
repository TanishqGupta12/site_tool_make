-- CreateTable
CREATE TABLE `forms` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `caption` VARCHAR(255) NULL,
    `Description` TEXT NULL,
    `event_id` BIGINT NULL,
    `slug` VARCHAR(255) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `registration_successful_message` VARCHAR(255) NOT NULL DEFAULT 'Registered Successfully. A confirmation mail is sent to you. Thank you!',
    `registration_updated_successful_message` VARCHAR(255) NOT NULL DEFAULT 'Profile Updated Successfully',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `forms` ADD CONSTRAINT `forms_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
