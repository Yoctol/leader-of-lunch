module.exports = async function RestaurantsIndexText(context, props){
  const restaurants = context.viewModel.restaurants;
  await context.sendText(`所有餐廳：\n${restaurants.join('\n')}`);
}