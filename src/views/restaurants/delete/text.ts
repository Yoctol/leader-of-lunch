export default async function RestaurantsDeleteText(context) {
  if (context.viewModel == undefined) {
    await context.sendText(`刪除餐廳失敗。`);
    return;
  }

  const restaurants = context.viewModel.restaurants;
  if (restaurants == null || restaurants.length == 0) {
    await context.sendText(`刪除餐廳失敗，請輸入有效的餐廳名稱。`);
    return;
  }

  const desc = restaurants
    .map(restaurant => {
      if (restaurant.success) {
        return `刪除 ${restaurant.name} 成功`;
      } else {
        return `刪除 ${restaurant.name} 失敗`;
      }
    })
    .join('\n');

  await context.sendText(desc);
}
