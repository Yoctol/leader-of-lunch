export default async function RestaurantsCreateLine(context) {
  if (context.viewModel == undefined) {
    await context.sendText(`新增餐廳失敗。`);
    return;
  }

  const restaurants = context.viewModel.restaurants;
  if (restaurants == null || restaurants.length == 0) {
    await context.sendText(`RestaurantsCreateText壞惹`);
    return;
  }

  const desc = restaurants
    .map(restaurant => {
      return `新增 ${restaurant.name} 成功`;
    })
    .join('\n');

  await context.sendText(desc);
}
