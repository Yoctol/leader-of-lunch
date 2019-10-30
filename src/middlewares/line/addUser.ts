import User from '../../entity/User'

export default async function LineAddUser(context, { next }) {
  const source = context.event.rawEvent.source;
  const key = source.userId;
  if (key == undefined) {
    return;
  }
  context.user = await User.findOrCreateBy({ key });

  console.log(`set user ${key}`);
  return next;
}
