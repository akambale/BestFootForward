module.exports = {
  feedbackReceiver: (parent, args, context) =>
    context.prisma.feedback({ id: parent.id }).feedbackReceiver(),
  feedbackGiver: (parent, args, context) =>
    context.prisma.feedback({ id: parent.id }).feedbackGiver(),
  flaggedBy: (parent, args, context) => context.prisma.feedback({ id: parent.id }).flaggedBy(),
};
