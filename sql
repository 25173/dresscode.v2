CREATE TABLE kleding
(
  id     INT(20) AUTO_INCREMENT
    PRIMARY KEY,
  url    VARCHAR(60) NOT NULL,
  userId INT(20)     NULL,
  soort  VARCHAR(40) NULL
)
  ENGINE = InnoDB;

CREATE TABLE users
(
  id           INT(5) AUTO_INCREMENT
    PRIMARY KEY,
  naam         VARCHAR(20)        NULL,
  gebruiksnaam VARCHAR(50)        NOT NULL,
  wachtwoord   VARCHAR(100)       NOT NULL,
  email        VARCHAR(50)        NOT NULL,
  Avatar       INT(1) DEFAULT '1' NULL,
  CONSTRAINT users_gebruiksnaam_uindex
  UNIQUE (gebruiksnaam),
  CONSTRAINT users_email_uindex
  UNIQUE (email)
)
  ENGINE = InnoDB;

