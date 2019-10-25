const render = require('../render');

async function deleteRestaurant(context, channelId, name) {
  try {
    await context.models.Restaurant.where({
      channel_id: channelId,
      name,
    }).save({ deleted_at: new Date() }, { method: 'update', patch: true });
    return {
      name,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      name,
      success: false,
    };
  }
}

module.exports = async function RestaurantsDelete(context, { match }) {
  const channelId = context.channel.attributes.id;
  const name = match.groups.name.trim();
  if (name === undefined) {
    return render(context);
  }

  const restaurants = await Promise.all(
    name.split(/[/\s]+/).map(async function(name) {
      return await deleteRestaurant(context, channelId, name);
    })
  );

  return render('restaurants/delete', { restaurants });
};
