module.exports = {
  owner: (parent, args, context) => context.prisma.blurb({ id: parent.id }).owner(),
};
