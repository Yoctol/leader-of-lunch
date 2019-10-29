

export default async function UsersShow(context) {
  const name = context.user.name;
  if (name) {
    await context.sendText(`你${name}啦`);
  } else {
    await context.sendText(`你誰～`);
  }
};
