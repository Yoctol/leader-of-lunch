export default async function ElectionsResultTelegram(context) {
  const election = context.viewModel.election;
  if (election == null) {
    await context.sendText('目前沒有午餐會議，請說「餓了」來發起午餐會議。');
    return;
  }

  let options = election.options;
  options = options.filter((o)=>o.votes.length > 0)

  if (options == null || options.length == 0) {
    await context.sendText(`第 ${election.index} 次午餐結論：目前還沒有任何人投票。`);
    return;
  }

  const result = options.map(o => `${o.restaurant.name}: ${o.votes.length}`).join('\n');
  const conclusion = `結論：吃${options[0].restaurant.name}`;
  await context.sendText(`本日午餐會議結果：\n${result}\n\n${conclusion}`);
}
