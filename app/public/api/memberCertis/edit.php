<?php

// Step 0: Validation
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE CertificationStatus
   SET startDate=?, expirationDate=?
   WHERE certificationId = ? AND personId=?'
);

$stmt->execute([
  $_POST['startDate'],
  $_POST['expirationDate'],
  $_POST['certificationId'],
  $_POST['personId']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Content-Type: application/json');
header('Location: ../memberCertis/');
