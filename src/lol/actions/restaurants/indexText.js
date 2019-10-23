module.exports = async function RestaurantsIndexText(context) {
  const restaurants = context.viewModel.restaurants;
  await context.sendText(`所有餐廳：\n${restaurants.join('\n')}`);
};
