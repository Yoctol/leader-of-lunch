module.exports = async function RestaurantsDelete(context, {next, match}){
  const channel_id = context.channel.attributes.id
  let name  = match.groups.name.trim();

  try {
    await context.models.Restaurant.where({
      channel_id,
      name,
    }).destroy()
    await context.sendText(`刪除 ${name} 成功`);
  } catch (error) {
    await context.sendText(`刪除 ${name} 失敗`);
  }
}