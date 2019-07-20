const connection = require('./connection.js');

const db = {};

db.insertUser = (args, send) => {
  const { userName } = args;
  var qString = `INSERT INTO users (name) VALUES ('${userName}');`;
  connection.query(qString, (error, results, fields) => {
    if (error) {
      // I'm really bad at backend, not sure how to properly handle errors.
      // just going to throw false on error
      return false;
    }
    // function will return true or false
    send(results[0]);
  });
};

db.getUser = (args, cb) => {
  const { userID } = args;
  var qString = `SELECT user_id, name FROM users WHERE user_id = '${userID}';`;
  connection.query(qString, cb);
};

db.getAllUsers = args => {
  var qString = 'SELECT * FROM users';
  connection.query(qString, (error, results, fields) => {
    if (error) {
      return false;
    }

    send(results[0]);
  });
};

db.insertContent = args => {
  const { userID, content } = args;
  var qString = `INSERT INTO content (user_id, content) VALUES (${userID}, '${content}');`;
  connection.query(qString, (error, results, fields) => {
    if (error) {
      return false;
    }

    send(results[0]);
  });
};

db.getContent = args => {
  const { contentID } = args;

  var qString = `SELECT content_id, content FROM content WHERE content_id = '${contentID}';`;
  connection.query(qString, (error, results, fields) => {
    if (error) {
      return false;
    }

    return results;
  });
};

db.insertRating = args => {
  const { contentID, rating } = args;
  var qString = `INSERT INTO ratings (content_id, rating) VALUES (${contentID}, ${rating});
  `;
  connection.query(qString, (error, results, fields) => {
    if (error) {
      return false;
    }

    return true;
  });
};

db.getAvgRating = args => {
  const { contentID } = args;
  var qString = `SELECT AVG(rating) AS 'Average Rating' FROM ratings WHERE content_id = ${contentID};`;
  connection.query(qString, (error, results, fields) => {
    if (error) {
      return false;
    }

    return results;
  });
};

db.insertFeedback = args => {
  const { userName } = args;
  var qString = ``;
  connection.query(qString, (error, results, fields) => {
    if (error) {
      throw error;
    }

    // some code here
  });
};

db.getFeedback = args => {
  const { userName } = args;
  var qString = ``;
  connection.query(qString, (error, results, fields) => {
    if (error) {
      throw error;
    }

    // some code here
  });
};

module.exports = db;
