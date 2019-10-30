export default async function ElectionsShowText(context) {
  const options = context.viewModel.options;

  if (options == null) {
    await context.sendText('你還沒吃過午餐，請先吃一波午餐再查看午餐票選結果');
    return;
  }

  const result = options.map(o => `${o.restaurant.name}: ${o.votes.length}`).join('\n');
  const conclusion = `結論：吃${options[0].restaurant.name}`;
  await context.sendText(`本日午餐票選結果：\n${result}\n\n${conclusion}`);
}
