const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Blurb = require('./resolvers/Blurb');
const Pic = require('./resolvers/Pic');
const Rating = require('./resolvers/Rating');
const Feedback = require('./resolvers/Feedback');

const resolvers = {
  Query,
  Mutation,
  User,
  Blurb,
  Pic,
  Rating,
  Feedback,
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
