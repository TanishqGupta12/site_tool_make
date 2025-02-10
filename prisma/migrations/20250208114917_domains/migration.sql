-- CreateTable
CREATE TABLE `domains` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `domain_name` VARCHAR(255) NULL,
    `subdomain_name` VARCHAR(255) NULL,
    `host` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `logo_file_name` VARCHAR(255) NULL,
    `logo_meta` VARCHAR(255) NULL,
    `custom_font_name` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
