const connection = require('./connection.js');

const db = {};

db.getUser = (args, cb) => {
  const { userID } = args;
  var qString = `SELECT userID, name FROM users WHERE userID = '${userID}';`;
  connection.query(qString, cb);
};

db.insertUser = (args, cb) => {
  const { name, age } = args;
  var qString = `INSERT INTO users (name, age) VALUES ('${name}', ${age});`;
  connection.query(qString, cb);
};

db.getAllUsers = (args, cb) => {
  var qString = 'SELECT userID, name FROM users';
  connection.query(qString, cb);
};

db.insertBlurb = (args, cb) => {
  const { userID, blurb } = args;
  var qString = `INSERT INTO blurbs (userID, blurb) VALUES (${userID}, '${blurb}');`;
  connection.query(qString, cb);
};

const getAllBlurbsFromUserID = (userID, cb) => {
  var qString = `SELECT blurbID, blurb FROM blurbs WHERE userID = ${userID};`;
  connection.query(qString, cb);
};

db.insertPicture = (args, cb) => {
  const { userID, picture } = args;
  var qString = `INSERT INTO pictures (userID, pictureURL) VALUES (${userID}, '${picture}');`;
  connection.query(qString, cb);
};

const getAllPicturesFromUserID = (userID, cb) => {
  var qString = `SELECT pictureID, pictureURL FROM pictures WHERE userID = ${userID};`;
  connection.query(qString, cb);
};

db.getAllPicturesAndBlurbsFromUserID = (args, cb) => {
  const { userID } = args;
  let data = [];
  let error = false;
  getAllBlurbsFromUserID(userID, (err, results) => {
    if (err) {
      error = true;
      cb({ error, data });
      return;
    }

    data = results;
    getAllPicturesFromUserID(userID, (err, results) => {
      if (err) {
        error = true;
        cb({ error, data: [] });
        return;
      }

      data = data.concat(results);
      cb({ error, data });
    });
  });
};

db.insertRating = (requestBody, cb) => {
  const { blurbID, pictureID, rating } = requestBody;
  let qString = '';
  if (blurbID) {
    qString = `INSERT INTO ratings (blurbID, rating) VALUES (${blurbID}, ${rating});`;
  } else {
    qString = `INSERT INTO ratings (pictureID, rating) VALUES (${pictureID}, ${rating});`;
  }
  connection.query(qString, err => {
    if (err) {
      cb({ error: true, data: false });
      return;
    }

    cb({ error: false, data: true });
  });
};

db.getAvgRating = (args, cb) => {
  const { pictureID, blurbID } = args;
  let qString = '';
  if (pictureID) {
    qString = `SELECT COUNT(rating) AS 'voteCount', ROUND(AVG(rating) * 100, 0) AS 'avgRating' FROM ratings WHERE pictureID = ${pictureID};`;
  } else {
    qString = `SELECT COUNT(rating) AS 'voteCount', ROUND(AVG(rating) * 100, 0) AS 'avgRating' FROM ratings WHERE blurbID = ${blurbID};`;
  }

  connection.query(qString, cb);
};

db.insertFeedback = (args, cb) => {
  const { userID, feedbackText } = args;
  var qString = `INSERT INTO feedback (userID, feedbackText) VALUES (${userID}, '${feedbackText}')`;
  connection.query(qString, err => {
    if (err) {
      cb({ error: true, data: false });
      return;
    }

    cb({ error: false, data: true });
  });
};

db.getAllFeedbackForUser = (args, cb) => {
  const { userID } = args;
  var qString = `SELECT feedbackID, feedbackText FROM feedback WHERE userID = ${userID}`;
  connection.query(qString, cb);
};

db.getFirstPicture = (args, cb) => {
  const { userID } = args;
  var qString = `SELECT pictureID, pictureURL FROM pictures WHERE userID = ${userID} LIMIT 1`;
  connection.query(qString, cb);
};

module.exports = db;
