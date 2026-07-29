<?php

declare(strict_types=1);

require_once __DIR__ . '/../_shared/bootstrap.php';

require_method('POST');

$db = ec_db($databaseConfig);
enforce_rate_limit($db, 'contact-submit', 10, 3600, $privacySalt);

$input = json_input();

$fullName = require_field($input['full_name'] ?? '', 'Full name', 120);
$email = require_email_field($input['email'] ?? '');
$phone = clean_string($input['phone'] ?? '', 40);
$inquiryType = require_field($input['inquiry_type'] ?? '', 'Reason for contact', 60);
$message = require_field($input['message'] ?? '', 'Message', 4000);
require_privacy_consent($input['consent_given'] ?? false);

$db->beginTransaction();
$stmt = $db->prepare(
    'INSERT INTO contact_messages
        (full_name, email, phone, inquiry_type, message, status, created_at)
     VALUES (?, ?, ?, ?, ?, "new", NOW())'
);
$stmt->execute([$fullName, $email, $phone, $inquiryType, $message]);
$leadId = (int) $db->lastInsertId();
record_lead_metadata($db, 'contact', $leadId, $input, $privacySalt);
$db->commit();

json_response(
    201,
    true,
    ['id' => $leadId],
    'Thanks for reaching out - we will respond within two business days.'
);
