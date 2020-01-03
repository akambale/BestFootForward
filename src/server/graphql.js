const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const Blurb = require('./resolvers/Blurb');
const Feedback = require('./resolvers/Feedback');
const Gender = require('./resolvers/Gender');
const Mutation = require('./resolvers/Mutation');
const Pic = require('./resolvers/Pic');
const Query = require('./resolvers/Query');
const Rating = require('./resolvers/Rating');
const User = require('./resolvers/User');

const resolvers = {
  Blurb,
  Feedback,
  Gender,
  Mutation,
  Pic,
  Query,
  Rating,
  User,
};

const server = new GraphQLServer({
  context: request => {
    return {
      ...request,
      prisma,
    };
  },
  resolvers,
  typeDefs: './schema.graphql',
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
