const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserID, convertToEpoch, getMinAdultBirthday } = require('../utils.js');

module.exports = {
  signup: async (parent, args, context, info) => {
    if (args.password.length < 8) {
      throw new Error('Password is too short');
    }
    const epochBirthday = convertToEpoch(args.birthday);
    const minAdultBirthday = getMinAdultBirthday();
    if (epochBirthday > minAdultBirthday) {
      throw new Error('Invalid birthday. You must be 18 years or older to create an account.');
    }
    if (args.maxAge - args.minAge < 4 || args.minAge < 18 || args.maxAge > 55) {
      throw new Error(
        'Invalid age range. Please stop trying to query the graphql server directly.',
      );
    }
    let {
      genderIdentityMale,
      genderIdentityFemale,
      genderIdentityNonBi,
      genderPreferenceMale,
      genderPreferenceFemale,
      genderPreferenceNonBi,
    } = args;
    if ((genderIdentityMale || genderIdentityFemale || genderIdentityNonBi) === false) {
      throw new Error('Invalid gender identity. Please select at least one.');
    }
    if ((genderPreferenceMale || genderPreferenceFemale || genderPreferenceNonBi) === false) {
      throw new Error('Invalid gender preference. Please select at least one.');
    }
    //TODO email validation

    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.createUser({
      ...args,
      password,
    });
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
  addBlurb: (parent, args, context) => {
    const userID = getUserID(context);
    return context.prisma.createBlurb({
      text: args.text,
      owner: { connect: { id: userID } },
    });
  },
  addPic: (parent, args, context) => {
    const userID = getUserID(context);
    return context.prisma.createPic({
      url: args.url,
      owner: { connect: { id: userID } },
    });
  },
  rate: (parent, args, context) => {
    const userID = getUserID(context);
    let obj;

    if (args.blurbID) {
      obj = { blurb: { connect: { id: args.blurbID } } };
    } else {
      obj = { pic: { connect: { id: args.picID } } };
    }
    return context.prisma.createRating({
      ...obj,
      ratingGiver: { connect: { id: userID } },
      score: args.score,
    });
  },
  giveFeedback: (parent, args, context) => {
    const userID = getUserID(context);
    return context.prisma.createFeedback({
      text: args.text,
      // createdAt: getCurrentTime(),
      flagged: false,
      feedbackGiver: { connect: { id: userID } },
      feedbackReceiver: { connect: { id: args.ownerID } },
    });
  },
  flagFeedback: (parent, args, context) => {
    const userID = getUserID(context);
    return context.prisma.updateFeedback({
      data: {
        flagged: true,
        flaggedBy: { connect: { id: userID } },
      },
      where: {
        id: args.id,
      },
    });
  },
};
