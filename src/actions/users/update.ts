export default async function UsersUpdate(context, { match }) {
  const name = match.groups.name;
  context.user.name = name;
  await context.user.save();
  await context.sendText(`好哦～好哦～`);
}
