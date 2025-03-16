-- CreateTable
CREATE TABLE `events` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `startDate` DATETIME(3) NULL,
    `slug` VARCHAR(191) NULL,
    `address` TEXT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `timeZone` VARCHAR(255) NOT NULL DEFAULT 'Singapore',
    `customCss` TEXT NULL,
    `customJs` TEXT NULL,
    `termsAndConditions` LONGTEXT NOT NULL,
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

    INDEX `users_roleId_fkey`(`roleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `event_uses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `eventId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `event_uses_eventId_fkey`(`eventId`),
    INDEX `event_uses_userId_fkey`(`userId`),
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

    INDEX `forms_event_id_fkey`(`event_id`),
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
    `value` VARCHAR(255) NULL,
    `onlyReady` BOOLEAN NULL DEFAULT false,
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

    INDEX `form_section_fields_form_id_fkey`(`form_id`),
    INDEX `form_section_fields_form_section_id_fkey`(`form_section_id`),
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

    INDEX `post_galleries_event_id_fkey`(`event_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `form_field_choices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sequence` INTEGER NULL,
    `caption` VARCHAR(255) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `specificFieldIfOther` BOOLEAN NULL,
    `createdAt` DATETIME(0) NULL,
    `updatedAt` DATETIME(0) NULL,
    `form_section_field_id` INTEGER NULL,

    INDEX `form_field_choices_form_section_field_id_fkey`(`form_section_field_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `subject` VARCHAR(255) NULL,
    `message` VARCHAR(255) NULL,
    `eventId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    INDEX `contact_eventId_fkey`(`eventId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `email_contents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `emailType` VARCHAR(255) NULL,
    `subject` VARCHAR(255) NULL,
    `content` TEXT NULL,
    `roleId` INTEGER NULL,
    `eventId` INTEGER NULL,
    `fromEmail` VARCHAR(255) NULL,
    `ccEmail` TEXT NULL,
    `hasAttachment` BOOLEAN NULL,
    `Attachment` TEXT NULL,
    `scheduleEmail` DATETIME(3) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    INDEX `email_contents_eventId_fkey`(`eventId`),
    INDEX `email_contents_roleId_fkey`(`roleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categorys` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` TEXT NULL,
    `eventId` INTEGER NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    INDEX `categorys_eventId_fkey`(`eventId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EventAgenda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `duration` VARCHAR(255) NULL,
    `category_id` INTEGER NULL,
    `event_id` INTEGER NULL,
    `has_download_certificate` BOOLEAN NOT NULL DEFAULT false,
    `is_paid` BOOLEAN NOT NULL DEFAULT false,
    `total_marks` DOUBLE NOT NULL DEFAULT 0,
    `passing_points` DOUBLE NULL DEFAULT 0,
    `has_pass_fail_page` BOOLEAN NOT NULL DEFAULT false,
    `max_attempts` INTEGER NULL DEFAULT 0,
    `valid_from` DATETIME(3) NULL,
    `valid_upto` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `EventAgenda_category_id_fkey`(`category_id`),
    INDEX `EventAgenda_event_id_fkey`(`event_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_topics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `sequence` INTEGER NULL,
    `practise_quiz` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `event_agenda_id` INTEGER NULL,

    INDEX `quiz_topics_event_agenda_id_fkey`(`event_agenda_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_questions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sequence` INTEGER NULL,
    `title` TEXT NOT NULL,
    `question_type` VARCHAR(255) NULL,
    `quiz_topic_id` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `wrong_answer_explanation` TEXT NULL,
    `is_required` BOOLEAN NOT NULL DEFAULT false,
    `correct_answer_explanation` TEXT NULL,
    `marks` DOUBLE NULL,
    `negative_marks` DOUBLE NULL,

    INDEX `quiz_questions_quiz_topic_id_fkey`(`quiz_topic_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_question_options` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` TEXT NOT NULL,
    `is_right` BOOLEAN NOT NULL DEFAULT false,
    `is_last_option` BOOLEAN NOT NULL DEFAULT false,
    `quiz_question_id` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `quiz_question_options_quiz_question_id_fkey`(`quiz_question_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_attempt_results` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `quiz_topic_id` INTEGER NULL,
    `question` TEXT NULL,
    `answer` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `is_right` DOUBLE NULL,
    `is_wrong` DOUBLE NULL,

    INDEX `quiz_attempt_results_quiz_topic_id_fkey`(`quiz_topic_id`),
    INDEX `quiz_attempt_results_user_id_fkey`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_attempts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `marks_gained` DOUBLE NULL,
    `quiz_attempt_result_id` INTEGER NULL,

    INDEX `quiz_attempts_quiz_attempt_result_id_fkey`(`quiz_attempt_result_id`),
    INDEX `quiz_attempts_user_id_fkey`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_results` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `is_pass` BOOLEAN NULL DEFAULT false,
    `quiz_attempt_id` INTEGER NULL,
    `points` DOUBLE NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `event_agenda_id` INTEGER NULL,

    INDEX `quiz_results_event_agenda_id_fkey`(`event_agenda_id`),
    INDEX `quiz_results_quiz_attempt_id_fkey`(`quiz_attempt_id`),
    INDEX `quiz_results_user_id_fkey`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `captions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `event_id` INTEGER NULL,

    INDEX `captions_event_id_fkey`(`event_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `discounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `event_id` INTEGER NULL,
    `code` VARCHAR(255) NULL,
    `is_active` BOOLEAN NULL DEFAULT false,
    `is_percentage` BOOLEAN NULL DEFAULT false,
    `discount_amount` VARCHAR(255) NULL,
    `min_discount` DOUBLE NULL,
    `max_discount` DOUBLE NULL,
    `valid_from` DATETIME(3) NULL,
    `valid_still` DATETIME(3) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    INDEX `discounts_event_id_fkey`(`event_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trickets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `event_id` INTEGER NULL,
    `Price` DOUBLE NULL,
    `is_active` BOOLEAN NULL DEFAULT false,
    `currency` VARCHAR(255) NULL,
    `min_user_limit` DOUBLE NULL,
    `is_group` BOOLEAN NULL DEFAULT false,
    `is_donation` BOOLEAN NULL DEFAULT false,
    `valid_from` DATETIME(3) NULL,
    `valid_still` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `event_agenda_id` INTEGER NULL,

    INDEX `trickets_event_agenda_id_fkey`(`event_agenda_id`),
    INDEX `trickets_event_id_fkey`(`event_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_notes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subject` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `userId` INTEGER NOT NULL,
    `eventId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `event_agenda_id` INTEGER NULL,

    INDEX `user_notes_event_agenda_id_fkey`(`event_agenda_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_tickets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `discount_code` VARCHAR(255) NULL,
    `userId` INTEGER NOT NULL,
    `eventId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `Tricket_id` INTEGER NULL,
    `event_agenda_id` INTEGER NULL,

    INDEX `user_tickets_Tricket_id_fkey`(`Tricket_id`),
    INDEX `user_tickets_event_agenda_id_fkey`(`event_agenda_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_courses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `event_agenda_id` INTEGER NULL,
    `completed` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `feedback` VARCHAR(191) NULL,
    `certificateUrl` VARCHAR(191) NULL,

    INDEX `user_courses_event_agenda_id_fkey`(`event_agenda_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_uses` ADD CONSTRAINT `event_uses_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_uses` ADD CONSTRAINT `event_uses_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE `email_contents` ADD CONSTRAINT `email_contents_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `email_contents` ADD CONSTRAINT `email_contents_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `categorys` ADD CONSTRAINT `categorys_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventAgenda` ADD CONSTRAINT `EventAgenda_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categorys`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventAgenda` ADD CONSTRAINT `EventAgenda_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_topics` ADD CONSTRAINT `quiz_topics_event_agenda_id_fkey` FOREIGN KEY (`event_agenda_id`) REFERENCES `EventAgenda`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_questions` ADD CONSTRAINT `quiz_questions_quiz_topic_id_fkey` FOREIGN KEY (`quiz_topic_id`) REFERENCES `quiz_topics`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_question_options` ADD CONSTRAINT `quiz_question_options_quiz_question_id_fkey` FOREIGN KEY (`quiz_question_id`) REFERENCES `quiz_questions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_attempt_results` ADD CONSTRAINT `quiz_attempt_results_quiz_topic_id_fkey` FOREIGN KEY (`quiz_topic_id`) REFERENCES `quiz_topics`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_attempt_results` ADD CONSTRAINT `quiz_attempt_results_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_attempts` ADD CONSTRAINT `quiz_attempts_quiz_attempt_result_id_fkey` FOREIGN KEY (`quiz_attempt_result_id`) REFERENCES `quiz_attempt_results`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_attempts` ADD CONSTRAINT `quiz_attempts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_results` ADD CONSTRAINT `quiz_results_event_agenda_id_fkey` FOREIGN KEY (`event_agenda_id`) REFERENCES `EventAgenda`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_results` ADD CONSTRAINT `quiz_results_quiz_attempt_id_fkey` FOREIGN KEY (`quiz_attempt_id`) REFERENCES `quiz_attempts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_results` ADD CONSTRAINT `quiz_results_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `captions` ADD CONSTRAINT `captions_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `discounts` ADD CONSTRAINT `discounts_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trickets` ADD CONSTRAINT `trickets_event_agenda_id_fkey` FOREIGN KEY (`event_agenda_id`) REFERENCES `EventAgenda`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trickets` ADD CONSTRAINT `trickets_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_notes` ADD CONSTRAINT `user_notes_event_agenda_id_fkey` FOREIGN KEY (`event_agenda_id`) REFERENCES `EventAgenda`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_tickets` ADD CONSTRAINT `user_tickets_Tricket_id_fkey` FOREIGN KEY (`Tricket_id`) REFERENCES `trickets`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_tickets` ADD CONSTRAINT `user_tickets_event_agenda_id_fkey` FOREIGN KEY (`event_agenda_id`) REFERENCES `EventAgenda`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_courses` ADD CONSTRAINT `user_courses_event_agenda_id_fkey` FOREIGN KEY (`event_agenda_id`) REFERENCES `EventAgenda`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
