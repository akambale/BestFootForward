const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const APP_SECRET = 'GraphQL-is-aw3some';

const getUserID = context => {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, APP_SECRET);
    return userId;
  }

  throw new Error('Not Authenticated');
};

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: (root, args, context, info) => context.prisma.links(),
  },
  Mutation: {
    post: (parent, args, context, info) => {
      const userId = getUserID(context);
      return context.prisma.createLink({
        url: args.url,
        description: args.description,
        postedBy: { connect: { id: userId } },
      });
    },
    signup: async (parent, args, context, info) => {
      const password = await bcrypt.hash(args.password, 10);
      const user = await context.prisma.createUser({ ...args, password });
      const token = jwt.sign({ userID: user.id }, APP_SECRET);
      return { token, user };
    },
    login: async (parent, args, context, info) => {
      const user = await context.prisma.user({ email: args.email });
      if (!user) {
        throw new Error('No such user found');
      }

      const valid = await bcrypt.compare(args.password, user.password);
      if (!valid) {
        throw new Error('Invalid password');
      }

      const token = jwt.sign({ userId: user.id }, APP_SECRET);

      return {
        token,
        user,
      };
    },
  },
  Link: {
    postedBy: (parent, args, context) => context.prisma.link({ id: parent.id }).postedBy(),
  },
  User: {
    links: (parent, args, context) => context.prisma.user({ id: parent.id }).links(),
  },
};

const server = new GraphQLServer({
  resolvers,
  typeDefs: './src/schema.graphql',
  context: request => {
    return {
      ...request,
      prisma,
    };
  },
});
server.start(() => console.log('Server is running on http://localhost:4000'));
