export default async function ElectionsCreateText(context) {
  const options = context.viewModel.election.options;

  if (options == null || options.length == 0) {
    await context.sendText(`目前沒有任何餐廳，請先新增餐廳再發起午餐會議。`);
    return;
  }

  const optionsDesc = options.map(option => {
    return `${option.index} ${option.restaurant.name}`;
  });

  await context.sendText(`本日菜單\n${optionsDesc.join('\n')}`);
}
