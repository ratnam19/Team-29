<?php

// Step 0: Validation
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE Certification
    SET certificationName=?, certifyingAgency=?, expiryPeriod=?
    WHERE certificationId = ?'
);

$stmt->execute([
  $_POST['certificationName'],
  $_POST['certifyingAgency'],
  $_POST['expiryPeriod'],
  $_POST['certificationId']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Content-Type: application/json');
header('Location: ../certification/');
