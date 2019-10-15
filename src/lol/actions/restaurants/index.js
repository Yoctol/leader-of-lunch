module.exports = async function RestaurantsIndex(context, {next, params}){
  const restaurantNames = await context.channel.restaurantNames()
  await context.sendText(`所有餐廳：\n${restaurantNames.join('\n')}`);
}