USE best_foot;

INSERT INTO users (name, age) VALUES ('Amogh', 25);
INSERT INTO users (name, age) VALUES ('Bob', 44);
INSERT INTO users (name, age) VALUES ('Gayle', 42);

INSERT INTO blurbs (userID, blurb) VALUES (1, 'I used to say I liked hiking, but then I moved here and I discovered what "mountains" are. Fun fact: they''re much bigger than hills');
INSERT INTO blurbs (userID, blurb) VALUES (1, 'I enjoy cooking, biking, karaoke, walking around the city');
INSERT INTO blurbs (userID, blurb) VALUES (2, 'My passions in life are making burgers . . . and I guess that''s about it');
INSERT INTO blurbs (userID, blurb) VALUES (2, 'Fun fact about me: I used to be a night time cab driver in Ocean City, NJ. You meet a LOT of interesting people!');
INSERT INTO blurbs (userID, blurb) VALUES (3, 'I love cats and I dont have a job');
INSERT INTO blurbs (userID, blurb) VALUES (3, `I'm looking for someone who checks all my boxes: you're a man, you have a face, you can go outside.`);


INSERT INTO pictures (userID, pictureURL) VALUES (1, 'http://localhost:3000/pics/amogh/1.jpg');
INSERT INTO pictures (userID, pictureURL) VALUES (1, 'http://localhost:3000/pics/amogh/2.jpg');
INSERT INTO pictures (userID, pictureURL) VALUES (1, 'http://localhost:3000/pics/amogh/3.png');
INSERT INTO pictures (userID, pictureURL) VALUES (1, 'http://localhost:3000/pics/amogh/4.png');
INSERT INTO pictures (userID, pictureURL) VALUES (1, 'http://localhost:3000/pics/amogh/5.png');
INSERT INTO pictures (userID, pictureURL) VALUES (1, 'http://localhost:3000/pics/amogh/6.png');
INSERT INTO pictures (userID, pictureURL) VALUES (2, 'http://localhost:3000/pics/bob/1.jpg');
INSERT INTO pictures (userID, pictureURL) VALUES (2, 'http://localhost:3000/pics/bob/2.jpg');
INSERT INTO pictures (userID, pictureURL) VALUES (2, 'http://localhost:3000/pics/bob/3.jpg');
INSERT INTO pictures (userID, pictureURL) VALUES (2, 'http://localhost:3000/pics/bob/4.png');
INSERT INTO pictures (userID, pictureURL) VALUES (2, 'http://localhost:3000/pics/bob/5.png');
INSERT INTO pictures (userID, pictureURL) VALUES (3, 'http://localhost:3000/pics/gayle/1.jpg');
INSERT INTO pictures (userID, pictureURL) VALUES (3, 'http://localhost:3000/pics/gayle/2.png');
INSERT INTO pictures (userID, pictureURL) VALUES (3, 'http://localhost:3000/pics/gayle/3.png');
INSERT INTO pictures (userID, pictureURL) VALUES (3, 'http://localhost:3000/pics/gayle/4.jpg');
INSERT INTO pictures (userID, pictureURL) VALUES (3, 'http://localhost:3000/pics/gayle/5.jpg');

INSERT INTO feedback (userID, feedbackText) VALUES(1, 'Wow Amogh this profile and your whole app is amazing.');
INSERT INTO feedback (userID, feedbackText) VALUES(2, 'I would add more hobbies rather than just your passion for burgers');