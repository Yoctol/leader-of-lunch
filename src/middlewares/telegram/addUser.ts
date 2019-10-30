import User from '../../entity/User';

export default async function TelegramAddUser(context, { next }) {
  const key = context.event.rawEvent.message.from.id;

  context.user = await User.findOne({ key });
  if (context.user == null) {
    context.user = new User();
    context.user.key = key;
    await context.user.save();
  }
  console.log(`set user ${key}`);

  return next;
}
