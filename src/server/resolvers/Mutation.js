const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserID } = require('../utils.js');

module.exports = {
  signup: async (parent, args, context, info) => {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.createUser({ ...args, password });
    const token = jwt.sign({ userID: user.id }, APP_SECRET);
    return {
      token,
      user,
    };
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

    const token = jwt.sign({ userID: user.id }, APP_SECRET);
    return {
      token,
      user,
    };
  },
  post: (parent, args, context, info) => {
    const userID = getUserID(context);
    return context.prisma.createLink({
      url: args.url,
      description: args.description,
      postedBy: { connect: { id: userID } },
    });
  },
  addBlurb: (parent, args, context) => {
    const userID = getUserID(context);
    return context.prisma.createBlurb({
      text: args.text,
      owner: { connect: { id: userID } },
    });
  },
  addPic: (parent, args, context) => {
    const userID = getUserID(context);
    return context.prisma.createBlurb({
      url: args.url,
      owner: { connect: { id: userID } },
    });
  },
  rate: (parent, args, context) => {
    let obj;
    if (args.blurbID) {
      obj = { blurb: { connect: { id: args.blurbID } } };
    } else {
      obj = { pic: { connect: { id: args.picID } } };
    }
    return context.prisma.createRating({
      ...obj,
      score: args.score,
    });
  },
  giveFeedback: (parent, args, context) => {
    const userID = getUserID(context);
    return context.prisma.createFeedback({
      text: args.text,
      feedbackGiver: { connect: { id: userID } },
      contentOwner: { connect: { id: args.ownerID } },
    });
  },
};
