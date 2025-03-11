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
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `events` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `domainId` INTEGER NULL,
    `description` TEXT NULL,
    `startDate` DATETIME(3) NULL,
    `slug` VARCHAR(191) NULL,
    `latitude` DECIMAL(12, 6) NULL,
    `longitude` DECIMAL(12, 6) NULL,
    `email` VARCHAR(255) NULL,
    `phone` VARCHAR(255) NULL,
    `timeZone` VARCHAR(255) NULL DEFAULT 'Singapore',
    `customCss` TEXT NULL,
    `customJs` TEXT NULL,
    `termsAndConditions` LONGTEXT NULL,
    `paymentNeeded` BOOLEAN NULL DEFAULT false,
    `publishableKey` VARCHAR(255) NULL DEFAULT '',
    `secretKey` VARCHAR(255) NULL DEFAULT '',
    `sendRegistrationConfirmationEmailToGuest` BOOLEAN NULL DEFAULT false,
    `footerText` TEXT NULL,
    `hideBlog` BOOLEAN NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `PageContent` TEXT NULL,
    `hideAboutPage` BOOLEAN NULL DEFAULT false,
    `hideCategory` BOOLEAN NULL DEFAULT false,
    `hideCourses` BOOLEAN NULL DEFAULT false,
    `hideGallery` BOOLEAN NULL DEFAULT false,
    `galleryText` VARCHAR(255) NULL,
    `hideInfo` BOOLEAN NULL DEFAULT false,
    `hideTeacherPage` BOOLEAN NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `in_active` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NULL,
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
    `encrypted_password` VARCHAR(255) NULL,
    `reset_password_token` VARCHAR(191) NULL,
    `reset_password_sent_at` DATETIME(3) NULL,
    `current_event_id` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `roleId` INTEGER NULL,
    `f1` VARCHAR(255) NULL,
    `f2` VARCHAR(255) NULL,
    `f3` VARCHAR(255) NULL,
    `f4` VARCHAR(255) NULL,
    `f5` VARCHAR(255) NULL,
    `f6` VARCHAR(255) NULL,
    `f7` VARCHAR(255) NULL,
    `f8` VARCHAR(255) NULL,
    `f9` VARCHAR(255) NULL,
    `f10` VARCHAR(255) NULL,
    `f11` VARCHAR(255) NULL,
    `f12` VARCHAR(255) NULL,
    `f13` VARCHAR(255) NULL,
    `f14` VARCHAR(255) NULL,
    `f15` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `event_uses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `eventId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `forms` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `caption` VARCHAR(255) NULL,
    `Description` TEXT NULL,
    `event_id` INTEGER NULL,
    `slug` VARCHAR(255) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `registration_successful_message` VARCHAR(255) NOT NULL DEFAULT 'Registered Successfully. A confirmation mail is sent to you. Thank you!',
    `registration_updated_successful_message` VARCHAR(255) NOT NULL DEFAULT 'Profile Updated Successfully',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `form_sections` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `caption` VARCHAR(255) NULL,
    `section_hint` TEXT NULL,
    `form_id` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `sequence` INTEGER NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `is_payment_section` BOOLEAN NOT NULL DEFAULT false,

    INDEX `form_sections_form_id_fkey`(`form_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `form_section_fields` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `caption` TEXT NULL,
    `placeholder` VARCHAR(255) NULL,
    `field_hint` TEXT NULL,
    `field_type` VARCHAR(255) NULL,
    `data_field` VARCHAR(255) NULL,
    `sequence` INTEGER NULL,
    `is_required` BOOLEAN NOT NULL DEFAULT false,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `is_single_column` BOOLEAN NOT NULL DEFAULT false,
    `form_id` INTEGER NULL,
    `form_section_id` INTEGER NULL,
    `file_upload_filed` BOOLEAN NULL DEFAULT false,
    `file_upload_type` VARCHAR(255) NULL DEFAULT 'image/jpeg,image/jpg,image/png,application/pdf,application/msword,application/mspowerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.openxmlformats-officedocument.wordprocessingml.document,audio/*,video/*',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_galleries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `poster` VARCHAR(255) NULL,
    `event_id` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `form_field_choices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sequence` INTEGER NULL,
    `caption` VARCHAR(255) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `specificFieldIfOther` BOOLEAN NULL,
    `createdAt` DATETIME NULL,
    `updatedAt` DATETIME NULL,
    `form_section_field_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `subject` VARCHAR(255) NULL,
    `message` VARCHAR(255) NULL,
    `createdAt` DATETIME NULL,
    `updatedAt` DATETIME NULL,
    `eventId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_domainId_fkey` FOREIGN KEY (`domainId`) REFERENCES `domains`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_uses` ADD CONSTRAINT `event_uses_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_uses` ADD CONSTRAINT `event_uses_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `forms` ADD CONSTRAINT `forms_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `form_sections` ADD CONSTRAINT `form_sections_form_id_fkey` FOREIGN KEY (`form_id`) REFERENCES `forms`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `form_section_fields` ADD CONSTRAINT `form_section_fields_form_id_fkey` FOREIGN KEY (`form_id`) REFERENCES `forms`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `form_section_fields` ADD CONSTRAINT `form_section_fields_form_section_id_fkey` FOREIGN KEY (`form_section_id`) REFERENCES `form_sections`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post_galleries` ADD CONSTRAINT `post_galleries_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `form_field_choices` ADD CONSTRAINT `form_field_choices_form_section_field_id_fkey` FOREIGN KEY (`form_section_field_id`) REFERENCES `form_section_fields`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contact` ADD CONSTRAINT `contact_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
