const { GraphQLServer } = require('graphql-yoga');

let idCount = 0;

const typeDefs = `
  type Query {
    info: String!
    feed: [Link!]!
  }

  type Mutation {
    post(url: String!, description: String!): Link!
    updateLink(id: ID!, url: String, description: String): Link
    deleteLink(id: ID!): Link
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

let links = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL',
  },
];

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);
      return link;
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
  typeDefs,
  resolvers,
});
server.start(() => console.log('Server is running on http://localhost:4000'));
