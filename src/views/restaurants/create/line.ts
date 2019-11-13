import textQuickReply from "../../shared/textQuickReply";

export default async function RestaurantsCreateLine(context) {
  if (context.viewModel == undefined) {
    await context.sendText(`新增餐廳失敗。`, textQuickReply('餐廳說明'));
    return;
  }

  const restaurants = context.viewModel.restaurants;
  if (restaurants == null || restaurants.length == 0) {
    await context.sendText(`RestaurantsCreateText壞惹`, textQuickReply('餐廳說明'));
    return;
  }

  const desc = restaurants
    .map(restaurant => {
      return `新增 ${restaurant.name} 成功`;
    })
    .join('\n');

  await context.sendText(desc, textQuickReply('餐廳說明'));
}
