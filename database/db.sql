-- create database
CREATE DATABASE todoDB;

-- using the database

USE todoDB;

CREATE TABLE task (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  description VARCHAR(300),
  state BOOLEAN DEFAULT 0
);

--tp show all tables
SHOW TABLES;

-- to descripbe tables
DESCRIBE to doDB;