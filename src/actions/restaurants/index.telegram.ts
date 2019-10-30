export default async function RestaurantsIndexTelegram(context) {
  const restaurants = context.viewModel.restaurants.map(r => r.name);
  await context.sendText(`所有餐廳：\n${restaurants.join('\n')}`);
}
