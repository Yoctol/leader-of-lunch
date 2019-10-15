module.exports = async function RestaurantsCreate(context, {next, params}){
  // if(params === undefined) {
  //   context.sendText(`新增餐廳失敗`)
  //   return;
  // }
  // let name = params.name;
  // if(name === undefined) {
  //   context.sendText(`新增餐廳失敗。`)
  //   return;
  // }

  let name = context.text.match(/新增(?<name>.+)/).groups.name
  name = name.trim();

  try {
    await context.channel.restaurants().create({name})
    context.sendText(`新增 ${name} 成功`)
  } catch (error) {
    context.sendText(`新增 ${name} 失敗`)
  }
}