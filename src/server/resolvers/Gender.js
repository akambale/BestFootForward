module.exports = {
  identityOwner: (parent, args, context) => context.prisma.gender({ id: parent.id }).owner(),
  preferenceOwner: (parent, args, context) => context.prisma.gender({ id: parent.id }).owner(),
};
