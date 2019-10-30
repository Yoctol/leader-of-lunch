export default async function SlackAddUser(context, { next }) {
  // const key = context.event.rawEvent.user;
  // console.log(`set user ${key}`);

  // context.user = await context.models.User.findOrCreate({ key });
  return next;
}
