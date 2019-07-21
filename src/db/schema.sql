DROP DATABASE IF EXISTS best_foot;
CREATE DATABASE best_foot;
USE best_foot;

CREATE TABLE users (
  user_id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  age INT,
  PRIMARY KEY(user_id)
);

CREATE TABLE blurbs (
  blurb_id INT
  AUTO_INCREMENT,
  user_id INT NOT NULL,
  blurb VARCHAR
  (255) NOT NULL,
  PRIMARY KEY (blurb_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE pictures(
  picture_id INT
  AUTO_INCREMENT,
  user_id INT NOT NULL,
  picture_url TEXT NOT NULL,
  PRIMARY KEY(picture_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE ratings(
  rating_id INT AUTO_INCREMENT,
  picture_id INT,
  blurb_id INT,
  rating INT NOT NULL,
  PRIMARY KEY (rating_id),
  FOREIGN KEY (picture_id) REFERENCES pictures(picture_id),
  FOREIGN KEY (blurb_id) REFERENCES blurbs(blurb_id)

);

CREATE TABLE feedback(
  feedback_id INT AUTO_INCREMENT,
  user_id INT NOT NULL,
  feedback_text TEXT NOT NULL,
  created DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (feedback_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- CREATE TABLE login(
--   user_id INT AUTO_INCREMENT,
--   password VARCHAR(255),
--   token VARCHAR(255) NOT NULL,
--   PRIMARY KEY (user_id) REFERENCES users(user_id)
-- )