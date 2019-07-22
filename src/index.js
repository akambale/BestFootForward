const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: (root, args, context, info) => context.prisma.links(),
  },
  Mutation: {
    post: (parent, args, context) => {
      return context.prisma.createLink({
        url: args.url,
        description: args.description,
      });
    },
    // deleteLink: (parent, args) => {
    //   for (let i = 0; i < links.length; i++) {
    //     let link = links[i];
    //     if (link.id === args.id) {
    //       delete links[i];
    //     }
    //   }
    // },
    // updateLink: (parent, args) => {
    //   for (let i = 0; i < links.length; i++) {
    //     let link = links[i];
    //     if (link.id === args.id) {
    //       links[i].description = args.description;
    //     }
    //   }
    // },
  },
};

const server = new GraphQLServer({
  resolvers,
  typeDefs: './src/schema.graphql',
  context: { prisma },
});
server.start(() => console.log('Server is running on http://localhost:4000'));
