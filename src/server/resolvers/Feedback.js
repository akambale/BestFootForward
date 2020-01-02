module.exports = {
  contentOwner: (parent, args, context) => context.prisma.feedback({ id: parent.id }).owner(),
  feedbackGiver: (parent, args, context) => context.prisma.feedback({ id: parent.id }).owner(),
};
