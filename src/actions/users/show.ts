export default async function UsersShow(context) {
  const name = context.user.name?.substring(0, 20);
  if (name) {
    await context.sendText(`你${name}啦`);
  } else {
    await context.sendText(`你誰～`);
  }
}
