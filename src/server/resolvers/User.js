module.exports = {
  blurbs: (parent, args, context) => context.prisma.user({ id: parent.id }).blurbs(),
  pics: (parent, args, context) => context.prisma.user({ id: parent.id }).pics(),
  feedbackGiven: (parent, args, context) => context.prisma.user({ id: parent.id }).feedback(),
  feedbackReceived: (parent, args, context) => context.prisma.user({ id: parent.id }).feedback(),
  feedbackFlagged: (parent, args, context) => context.prisma.user({ id: parent.id }).feedback(),
};
