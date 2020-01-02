module.exports = {
  contentOwner: (parent, args, context) =>
    context.prisma.feedback({ id: parent.id }).contentOwner(),
  feedbackGiver: (parent, args, context) =>
    context.prisma.feedback({ id: parent.id }).feedbackGiver(),
};
