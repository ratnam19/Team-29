<?php

// Step 0: Validation
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE Person
    SET firstName =?, lastName =?, gender=?, dob=?, email=?, mobilePhone=?, workPhone=?, street=?, city=?, state=?, zip=?, region=?, stationNumber=?, radioNumber=?, position=?, startDate=?, isActive=?, isEmployee=?
    WHERE personId = ?'
);

$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['gender'],
  $_POST['dob'],
  $_POST['email'],
  $_POST['mobilePhone'],
  $_POST['workPhone'],
  $_POST['street'],
  $_POST['city'],
  $_POST['state'],
  $_POST['zip'],
  $_POST['region'],
  $_POST['stationNumber'],
  $_POST['radioNumber'],
  $_POST['position'],
  $_POST['startDate'],
  $_POST['isActive'],
  $_POST['isEmployee'],
  $_POST['personId']
]);



// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Content-Type: application/json');
header('Location: ../list/');
