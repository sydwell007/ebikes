-- Civitas Cargo E-Bikes - lead capture schema (partnership and contact
-- form submissions).
-- Select the application database before importing this file.

CREATE TABLE IF NOT EXISTS partnership_requests (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(120) NOT NULL,
    email VARCHAR(254) NOT NULL,
    organization VARCHAR(200) NOT NULL DEFAULT '',
    phone VARCHAR(40) NOT NULL DEFAULT '',
    interest_type ENUM(
        'Fleet Leasing',
        'StreetShops Delivery Pilot',
        'Municipality Partnership',
        'Campus Mobility',
        'Investor Interest',
        'Manufacturing / Supplier'
    ) NOT NULL,
    message TEXT NOT NULL,
    status ENUM('new', 'in_review', 'resolved') NOT NULL DEFAULT 'new',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY idx_partnership_requests_status (status),
    KEY idx_partnership_requests_interest_type (interest_type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS contact_messages (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(120) NOT NULL,
    email VARCHAR(254) NOT NULL,
    phone VARCHAR(40) NOT NULL DEFAULT '',
    inquiry_type ENUM('General', 'Partnership', 'Media / Press', 'Support', 'Other') NOT NULL DEFAULT 'General',
    message TEXT NOT NULL,
    status ENUM('new', 'in_review', 'resolved') NOT NULL DEFAULT 'new',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY idx_contact_messages_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
