-- CreateTable
CREATE TABLE `roles` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `in_active` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `salutation` VARCHAR(255) NULL,
    `first_name` TEXT NULL,
    `last_name` TEXT NULL,
    `position` TEXT NULL,
    `organization` TEXT NULL,
    `address` VARCHAR(255) NULL,
    `city` VARCHAR(255) NULL,
    `mobile` VARCHAR(255) NULL,
    `online_status` VARCHAR(255) NULL DEFAULT 'offline',
    `locale` VARCHAR(255) NULL DEFAULT 'en',
    `otp` VARCHAR(255) NULL,
    `avatar` VARCHAR(255) NULL,
    `authentication_token` VARCHAR(255) NULL,
    `custom_fields` LONGTEXT NULL,
    `encrypted_password` VARCHAR(255) NOT NULL,
    `reset_password_token` VARCHAR(191) NULL,
    `reset_password_sent_at` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `roleId` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
