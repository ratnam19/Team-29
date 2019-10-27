<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'SELECT * FROM innodb.CertificationStatus cs, innodb.Person p, innodb.Certification c
WHERE cs.personId = p.personId and c.certificationId = cs.certificationId'
);
$stmt->execute();
$persons = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($persons, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
