module.exports = async function UsersShow(context, {next}){
  const name = context.user.attributes.name
  if(name){
    await context.sendText(`你${name}啦`)
  }else{
    await context.sendText(`你誰～`)
  }
}