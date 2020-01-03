module.exports = {
  pic: (parent, args, context) => context.prisma.rating({ id: parent.id }).pic(),
  blurb: (parent, args, context) => context.prisma.rating({ id: parent.id }).blurb(),
  ratingGiver: (parent, args, context) => context.prisma.rating({ id: parent.id }).user(),
};
