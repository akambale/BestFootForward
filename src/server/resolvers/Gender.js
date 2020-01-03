module.exports = {
  owner: (parent, args, context) => context.prisma.gender({ id: parent.id }).owner(),
};
