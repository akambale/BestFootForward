const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }`);

const root = { hello: () => 'Hello world!' };
const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(3000);

// const db = require('./controller.js');

// app.post('/api/users', (req, res) => {
//   db.insertUser(req.query, res.send.bind(this));
// });

// app.get('/api/users', async (req, res) => {
//   db.getUser(req.query, (error, results, fields) => {
//     if (error) {
//       return false;
//     }
//     res.send(results[0]);
//   });
// });

// app.post('/api/content', async (req, res) => {
//   const result = await db.insertContent(req.data);
//   res.send(result);
// });

// app.get('/api/content', async (req, res) => {
//   const result = await db.getContent(req.data);
//   res.send(result);
// });

// app.post('/api/ratings', async (req, res) => {
//   const result = await db.insertUser(req.data);
//   res.send(result);
// });

// app.get('/api/ratings', async (req, res) => {
//   const result = await db.insertUser(req.data);
//   res.send(result);
// });

// app.post('/api/feedback', async (req, res) => {
//   const result = await db.insertUser(req.data);
//   res.send(result);
// });

// app.get('/api/feedback', async (req, res) => {
//   const result = await db.insertUser(req.data);
//   res.send(result);
// });
