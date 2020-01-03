const { convertToEpoch, getCurrentTime } = require('../utils');
const seasonsOfLove = 525600;
const secondsInYear = seasonsOfLove * 60;
module.exports = {
  pic: (parent, args, context) => context.prisma.rating({ id: parent.id }).pic(),
  blurb: (parent, args, context) => context.prisma.rating({ id: parent.id }).blurb(),
  ratingGiver: (parent, args, context) => context.prisma.rating({ id: parent.id }).user(),
  ratingGiverAge: (parent, args, context) => {
    const user = context.prisma.rating({ id: parent.id }).user();
    const ageInSeconds = getCurrentTime() - convertToEpoch(user.birthday);
    return Math.floor(ageInSeconds / secondsInYear);
  },
};
