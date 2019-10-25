module.exports = async function TelegramAddUser(context, { next }) {
  const key = context.event.rawEvent.message.from.id;
  console.log(`set user ${key}`);

  context.user = await context.models.User.findOrCreate({ key });
  return next;
};
