DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT,
  name VARCHAR(255),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT,
  content VARCHAR(255),
  room VARCHAR(100),
  fromUser INT(10),
  FOREIGN KEY (fromUser) REFERENCES users(id),
  PRIMARY KEY(id)
);
/* Create other tables and define schemas for them here! */

CREATE TABLE friends (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT,
  user1 INT,
  user2 INT,
  FOREIGN KEY(user1) REFERENCES users(id),
  FOREIGN KEY(user2) REFERENCES users(id),
  PRIMARY KEY(id)
);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

