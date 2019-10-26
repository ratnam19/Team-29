USE innodb;

CREATE TABLE Certification (
  certificationName varchar(150) NOT NULL,
  certifyingAgency varchar(70) DEFAULT NULL,
  expirationDate date DEFAULT NULL,
  PRIMARY KEY (certificationName)
);

CREATE TABLE CertificationStatus(
  personId int(11) NOT NULL,
  certificationName varchar(150) NOT NULL,
  dateRenewed date DEFAULT NULL,
  certificationDate date DEFAULT NULL,
  PRIMARY KEY (personId,certificationName),
  FOREIGN KEY (personId) REFERENCES Person(personId)
);

CREATE TABLE Person(
  personId int(11) NOT NULL AUTO_INCREMENT,
  firstName varchar(64) NOT NULL,
  lastName varchar(64) NOT NULL,
  gender char(1) NOT NULL,
  dob date DEFAULT NULL,
  mobilePhone int(11) DEFAULT NULL,
  workPhone int(11) DEFAULT NULL,
  address varchar(120) DEFAULT NULL,
  radioNumber int(11) NOT NULL,
  stationNumber int(11) NOT NULL,
  startDate date NOT NULL,
  position varchar(30) NOT NULL,
  isActive tinyint(1) DEFAULT 0,
  email varchar(100) DEFAULT NULL,
  isEmployee tinyint(1) DEFAULT 0,
  PRIMARY KEY (personId)
);

CREATE TABLE User (
  email varchar(30) NOT NULL,
  password varchar(30) DEFAULT NULL,
  personId int(11) NOT NULL,
  PRIMARY KEY (email),
  FOREIGN KEY (personId) REFERENCES Person(personId)
);
