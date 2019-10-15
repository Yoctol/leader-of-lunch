module.exports = async function RestaurantsDelete(context, {next, params}){
  const channel_id = context.channel.attributes.id
  // const name  = params.name

  let name = context.text.match(/刪除(?<name>.+)/).groups.name
  name = name.trim();

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