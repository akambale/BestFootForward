module.exports = {
  pic: (parent, args, context) => context.prisma.pic({ id: parent.id }).pic(),
  blurb: (parent, args, context) => context.prisma.blurb({ id: parent.id }).blurb(),
};
