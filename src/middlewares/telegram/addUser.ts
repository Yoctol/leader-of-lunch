import User from '../../entity/User';

export default async function TelegramAddUser(context, { next }) {
  const key = context.event.rawEvent.message.from.id;
  context.user = await User.findOrCreateBy({ key });

  console.log(`set user ${key}`);
  return next;
}
