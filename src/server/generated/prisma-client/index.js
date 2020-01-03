"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Gender",
    embedded: false
  },
  {
    name: "Blurb",
    embedded: false
  },
  {
    name: "Pic",
    embedded: false
  },
  {
    name: "Rating",
    embedded: false
  },
  {
    name: "Feedback",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/amogh-53a5a8/bestfoot/dev`
});
exports.prisma = new exports.Prisma();
