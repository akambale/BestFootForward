module.exports = {
  blurbs: (parent, args, context) => context.prisma.user({ id: parent.id }).blurbs(),
  pics: (parent, args, context) => context.prisma.user({ id: parent.id }).pics(),
  feedback: (parent, args, context) => context.prisma.user({ id: parent.id }).feedback(),
};
