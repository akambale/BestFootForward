CREATE DATABASE IF NOT EXISTS best_foot;

USE best_foot;

CREATE TABLE IF NOT EXISTS users (
  user_id INT
  AUTO_INCREMENT, name VARCHAR
  (255) NOT NULL, PRIMARY KEY
  (user_id)
);

INSERT INTO users  (name)VALUES  ('amogh');
INSERT INTO users  (name)VALUES  ('bob');INSERT INTO users  (name)VALUES  ('teddy');


CREATE TABLE content (
  content_id INT
  AUTO_INCREMENT,
  user_id INT NOT NULL,
  content VARCHAR
  (255) NOT NULL,
  PRIMARY KEY (content_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO content (user_id, content) VALUES (1, 'I like long walks on the beach');
INSERT INTO content (user_id, content) VALUES (1, 'I hate hiking');
INSERT INTO content (user_id, content) VALUES (2, 'I am a gym rat');
INSERT INTO content (user_id, content) VALUES (2, 'I dislike boring people');


CREATE TABLE pictures(
  picture_id INT
  AUTO_INCREMENT,
  user_id INT NOT NULL,
  picture_url TEXT NOT NULL,
  PRIMARY KEY(picture_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO pictures (user_id, picture_url)
VALUES (1, 'https://avatars3.githubusercontent.com/u/8716375?s=400&u=48a94ab32140f96846bd1af14688ad94ad20c01a&v=4');
INSERT INTO pictures (user_id, picture_url)
VALUES (2, 'https://avatars3.githubusercontent.com/u/8716375?s=400&u=48a94ab32140f96846bd1af14688ad94ad20c01a&v=4');
INSERT INTO pictures (user_id, picture_url)
VALUES (3, 'https://avatars3.githubusercontent.com/u/8716375?s=400&u=48a94ab32140f96846bd1af14688ad94ad20c01a&v=4');


CREATE TABLE ratings(
  rating_id INT AUTO_INCREMENT,
  content_id INT NOT NULL,
  rating INT NOT NULL,
  PRIMARY KEY (rating_id),
  FOREIGN KEY (content_id) REFERENCES content (content_id)
);

INSERT INTO ratings (content_id, rating) VALUES(1, 0);
INSERT INTO ratings (content_id, rating) VALUES(1, 1);
INSERT INTO ratings (content_id, rating) VALUES(1, 0);
INSERT INTO ratings (content_id, rating) VALUES(1, 1);
INSERT INTO ratings (content_id, rating) VALUES(2, 0);
INSERT INTO ratings (content_id, rating) VALUES(2, 1);
INSERT INTO ratings (content_id, rating) VALUES(2, 1);
INSERT INTO ratings (content_id, rating) VALUES(2, 1);


CREATE TABLE feedback(
  feedback_id INT AUTO_INCREMENT,
  user_id INT NOT NULL,
  feedback_text TEXT NOT NULL,
  created DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (feedback_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO feedback (user_id, feedback_text) VALUES(1, 'Wow Amogh your whole app and this profile is amazing.');
INSERT INTO feedback (user_id, feedback_text) VALUES(1, 'this self description just says hello. you need more info than that to impress people');