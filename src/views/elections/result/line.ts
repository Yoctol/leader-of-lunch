

export default async function ElectionsResultLine(context) {
  const election = context.viewModel.election;
  if (election == null) {
    await context.sendText('你還沒吃過午餐，請先吃一波午餐再查看午餐票選結果');
    return;
  }

  let options = election.options;
  options = options.filter((o)=>o.votes.length > 0)

  if (options == null || options.length == 0) {
    await context.sendText(`第 ${election.index} 次午餐結論：目前還沒有任何人投票。`);
    return;
  }

  const title =`第 ${election.index} 次午餐結論：吃${options[0].restaurant.name}`

  const contents = options.map(o => {
    return {
      "type": "text",
      "text": `${o.restaurant.name}: ${o.votes.length}`,
      "size": "sm",
      "color": "#666666",
      "wrap": true,
      "margin": "lg"
    }
  })

  const bubbleContents:any = [
    {
      "type": "text",
      "text": title,
      "size": "xl",
      "weight": "bold",
      "wrap": true
    },
    {
      "type": "separator",
      "margin": "md",
      "color": "#000000"
    },
    {
      "type": "text",
      "text": '其中各項得票數如下',
      "size": "xs",
      "weight": "bold",
      "color": "#333333",
      "margin": "lg"
    },
    ...contents
  ]

  const bubble = {
    "type": "bubble",
    "size": "giga",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": bubbleContents
    }
  }

  await context.sendFlex(title, bubble);
}
