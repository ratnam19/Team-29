USE innodb;

CREATE TABLE Certification (
  certificationId int(11)  NOT NULL AUTO_INCREMENT,
  certificationName varchar(150) NOT NULL,
  certifyingAgency varchar(70) DEFAULT NULL,
  expiryPeriod int(10) DEFAULT NULL,
  PRIMARY KEY (certificationId)
);

CREATE TABLE `Person` (
  `personId` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(64) NOT NULL,
  `lastName` varchar(64) NOT NULL,
  `gender` char(1) NOT NULL,
  `dob` date DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `mobilePhone` int(11) DEFAULT NULL,
  `workPhone` int(11) DEFAULT NULL,
  `street` varchar(120) DEFAULT NULL,
  `city` varchar(120) DEFAULT NULL,
  `zip` varchar(120) DEFAULT NULL,
  `state` varchar(120) DEFAULT NULL,
  `region` varchar(120) DEFAULT NULL,
  `radioNumber` int(11) NOT NULL,
  `stationNumber` int(11) NOT NULL,
  `startDate` date NOT NULL,
  `position` varchar(30) NOT NULL,
  `isActive` int(1) DEFAULT 0,
  `isEmployee` int(1) DEFAULT 0,
  PRIMARY KEY (`personId`)
) ENGINE=InnoDB AUTO_INCREMENT=999 DEFAULT CHARSET=latin1;

CREATE TABLE `User` (
  `email` varchar(30) NOT NULL,
  `password` varchar(30) DEFAULT NULL,
  `personId` int(11) NOT NULL,
  PRIMARY KEY (`email`),
  KEY `personId` (`personId`),
  CONSTRAINT `User_ibfk_1` FOREIGN KEY (`personId`) REFERENCES `Person` (`personId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `CertificationStatus` (
  `personId` int(11) NOT NULL,
  `certificationId` int(11) NOT NULL,
  `startDate` date DEFAULT NULL,
  `expirationDate` date DEFAULT NULL,
  PRIMARY KEY (`personId`,`certificationId`),
  CONSTRAINT `CertificationStatus_ibfk_1` FOREIGN KEY (`personId`) REFERENCES `Person` (`personId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
