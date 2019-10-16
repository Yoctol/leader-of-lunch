module.exports = async function RestaurantsCreate(context, {next, match}){
  const name = match.groups.name.trim();
  if(name === undefined) {
    context.sendText(`新增餐廳失敗。`)
    return;
  }

  try {
    await context.channel.restaurants().create({name})
    context.sendText(`新增 ${name} 成功`)
  } catch (error) {
    context.sendText(`新增 ${name} 失敗`)
  }
}