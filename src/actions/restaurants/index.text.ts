export default async function RestaurantsIndexText(context) {
  const restaurants = context.viewModel.restaurants.map((r)=>r.name);
  await context.sendText(`所有餐廳：\n${restaurants.join('\n')}`);
};
