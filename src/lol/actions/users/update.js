module.exports = async function UsersUpdate(context, {next, params}){
  // const name = params.name;
  const name = context.text.match(/叫?我(?<name>.+)/).groups.name
  await context.user.save({name})
  await context.sendText(`好哦～好哦～`);
}