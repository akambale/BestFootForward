DROP DATABASE IF EXISTS best_foot;
CREATE DATABASE best_foot;
USE best_foot;

CREATE TABLE users (
  userID INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  age INT,
  PRIMARY KEY(userID)
);

CREATE TABLE blurbs (
  blurbID INT AUTO_INCREMENT,
  userID INT NOT NULL,
  blurb VARCHAR (255) NOT NULL,
  PRIMARY KEY (blurbID),
  FOREIGN KEY (userID) REFERENCES users(userID)
);

CREATE TABLE pictures(
  pictureID INT
  AUTO_INCREMENT,
  userID INT NOT NULL,
  pictureURL TEXT NOT NULL,
  PRIMARY KEY(pictureID),
  FOREIGN KEY (userID) REFERENCES users(userID)
);

CREATE TABLE ratings(
  ratingID INT AUTO_INCREMENT,
  pictureID INT,
  blurbID INT,
  rating INT NOT NULL,
  PRIMARY KEY (ratingID),
  FOREIGN KEY (pictureID) REFERENCES pictures(pictureID),
  FOREIGN KEY (blurbID) REFERENCES blurbs(blurbID)

);

CREATE TABLE feedback(
  feedbackID INT AUTO_INCREMENT,
  userID INT NOT NULL,
  feedbackText TEXT NOT NULL,
  created DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (feedbackID),
  FOREIGN KEY (userID) REFERENCES users(userID)
);

-- CREATE TABLE login(
--   userID INT AUTO_INCREMENT,
--   password VARCHAR(255),
--   token VARCHAR(255) NOT NULL,
--   PRIMARY KEY (userID) REFERENCES users(userID)
-- )