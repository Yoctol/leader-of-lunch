module.exports = async function RestaurantsIndexTelegram(context) {
  const restaurants = context.viewModel.restaurants;
  await context.sendText(`所有餐廳：\n${restaurants.join('\n')}`);
};
