<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'SELECT p.personId, p.firstName,p.lastName,p.gender,p.dob, p.email,p.mobilePhone,p.workPhone,p.street,p.city,p.zip,p.state,p.region,p.radioNumber,p.stationNumber,p.startDate,p.position,p.isActive,p.isEmployee,
  c.certificationId, c.certificationName, c.certifyingAgency, c.expiryPeriod,s.startDate as issuedDate, s.expirationDate
FROM CertificationStatus s
INNER JOIN Certification c ON c.certificationId = s.certificationId
INNER JOIN  Person p ON p.personId = s.personId'
);
$stmt->execute();
$persons = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($persons, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
