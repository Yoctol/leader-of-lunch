module.exports = async function UsersUpdate(context, { match }) {
  const name = match.groups.name;
  await context.user.save({ name });
  await context.sendText(`好哦～好哦～`);
};
