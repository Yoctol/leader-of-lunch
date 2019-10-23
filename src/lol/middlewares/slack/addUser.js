module.exports = async function AddUser(context, { next }) {
  const key = context.event.rawEvent.user;
  console.log(`set user ${key}`);

  context.user = await context.models.User.findOrCreate({ key });
  return next;
};
