export default async function LineAddUser(context, { next }) {
  // const source = context.event.rawEvent.source;
  // const key = source.userId;
  // if (key == undefined) {
  //   return;
  // }

  // console.log(`set user ${key}`);
  // context.user = await context.models.User.findOrCreate({ key });
  return next;
};
