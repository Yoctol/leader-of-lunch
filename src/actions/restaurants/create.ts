import render from '../../views/render';

export default async function RestaurantsCreate(context, { match }) {
  const name = match.groups.name.trim();
  if (name === undefined) {
    return render('restaurants/create');
  }

  const restaurants = await Promise.all(
    name.split(/[/\s]+/)
        .filter(name=>name.length > 0)
        .map(async function(name) {
      return await context.channel.addRestaurantByName(name);
    }),
  );

  return render('restaurants/create', { restaurants });
}
