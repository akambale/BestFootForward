const express = require('express');

const db = require('controller.js');

const app = express();

app.post('/api/users', async (req, res) => {
  const result = await db.insertUser(req.data);
  res.send(result);
});

app.get('/api/users', async (req, res) => {
  const result = await db.getUser(req.data);
  res.send(result);
});

app.post('/api/content', async (req, res) => {
  const result = await db.insertContent(req.data);
  res.send(result);
});

app.get('/api/content', async (req, res) => {
  const result = await db.getContent(req.data);
  res.send(result);
});

app.post('/api/ratings', async (req, res) => {
  const result = await db.insertUser(req.data);
  res.send(result);
});

app.get('/api/ratings', async (req, res) => {
  const result = await db.insertUser(req.data);
  res.send(result);
});

app.post('/api/feedback', async (req, res) => {
  const result = await db.insertUser(req.data);
  res.send(result);
});

app.get('/api/feedback', async (req, res) => {
  const result = await db.insertUser(req.data);
  res.send(result);
});
