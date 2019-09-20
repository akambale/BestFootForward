const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./db/controller.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(3000);

//done
app.get('/api/users', (req, res) => {
  db.getUser(req.query, (error, results, fields) => {
    if (error) {
      res.send({ err: true, data: null });
    }
    res.send({ err: false, data: results });
  });
});

//done
app.post('/api/users', (req, res) => {
  db.insertUser(req.query, (error, results, fields) => {
    if (error) {
      res.send({ err: true, data: null });
    }
    res.send({ err: false, data: results });
  });
});

//done
app.get('/api/allUsers', (req, res) => {
  db.getAllUsers(req.query, (error, results, fields) => {
    if (error) {
      res.send({ err: true, data: null });
    }
    res.send({ err: false, data: results });
  });
});

app.post('/api/blurb', (req, res) => {
  db.insertBlurb(req.query, (error, results, fields) => {
    if (error) {
      res.send({ err: true, data: null });
    }
    res.send({ err: false, data: results });
  });
});

app.post('/api/picture', (req, res) => {
  db.insertPicture(req.query, (error, results, fields) => {
    if (error) {
      res.send({ err: true, data: null });
    }
    res.send({ err: false, data: results });
  });
});

app.get('/api/firstPicture', (req, res) => {
  db.getFirstPicture(req.query, (error, results) => {
    if (error) {
      console.log(error);
    }
  });
});

//done
app.get('/api/userContent', async (req, res) => {
  db.getAllPicturesAndBlurbsFromUserID(req.query, data => {
    res.send(data);
  });
});

app.post('/api/ratings', async (req, res) => {
  const result = await db.insertUser(req.data);
  res.send(result);
});

//done
app.get('/api/avgRating', async (req, res) => {
  db.getAvgRating(req.query, (error, results) => {
    if (error) {
      res.send({ error: true, data: results });
    }
    res.send({ error: false, data: results });
  });
});

app.post('/api/feedback', async (req, res) => {
  db.insertFeedback(req.query, (error, results) => {
    if (error) {
      res.send({ error: true, data: results });
    }
    res.send({ error: false, data: results });
  });
});

//done
app.get('/api/feedback', async (req, res) => {
  db.getAllFeedbackForUser(req.query, (error, results) => {
    if (error) {
      res.send({ error: true, data: results });
    }
    res.send({ error: false, data: results });
  });
});
