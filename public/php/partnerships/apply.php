<?php

declare(strict_types=1);

require_once __DIR__ . '/../_shared/bootstrap.php';

require_method('POST');

$db = ec_db($databaseConfig);
enforce_rate_limit($db, 'partnerships-apply', 10, 3600, $privacySalt);

$input = json_input();

$fullName = require_field($input['full_name'] ?? '', 'Full name', 120);
$email = require_email_field($input['email'] ?? '');
$organization = clean_string($input['organization'] ?? '', 200);
$phone = clean_string($input['phone'] ?? '', 40);
$interestType = require_field($input['interest_type'] ?? '', 'Partnership interest', 60);
$message = clean_string($input['message'] ?? '', 4000);
require_privacy_consent($input['consent_given'] ?? false);

$db->beginTransaction();
$stmt = $db->prepare(
    'INSERT INTO partnership_requests
        (full_name, email, organization, phone, interest_type, message, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?, "new", NOW())'
);
$stmt->execute([$fullName, $email, $organization, $phone, $interestType, $message]);
$leadId = (int) $db->lastInsertId();
record_lead_metadata($db, 'partnership', $leadId, $input, $privacySalt);
$db->commit();

json_response(
    201,
    true,
    ['id' => $leadId],
    'Thanks - your partnership request has been received. Our team will follow up shortly.'
);
