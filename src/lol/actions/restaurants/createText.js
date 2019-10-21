module.exports = async function RestaurantsCreateText(context, props){
  if(context.viewModel == undefined){
    await context.sendText(`新增餐廳失敗。`)
    return
  }

  const restaurants = context.viewModel.restaurants;
  if(restaurants == null || restaurants.length == 0){
    await context.sendText(`RestaurantsCreateText壞惹`)
    return
  }

  const desc = restaurants.map((restaurant)=>{
    if(restaurant.success){
      return `新增 ${restaurant.name} 成功`;
    }else{
      return `新增 ${restaurant.name} 失敗`;
    }
  }).join('\n')

  await context.sendText(desc);
}