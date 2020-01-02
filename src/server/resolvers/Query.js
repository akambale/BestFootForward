module.exports = {
  users: (parent, args, context, info) => context.prisma.users(),
};
