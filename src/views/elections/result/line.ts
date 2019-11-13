
import textQuickReply from '../../shared/textQuickReply'

export default async function ElectionsResultLine(context) {
  const election = context.viewModel.election;
  if (election == null) {
    await context.sendText('目前沒有午餐會議，請說「餓了」來發起午餐會議。',
    textQuickReply("會議說明")
    );
    return;
  }

  let options = election.options;
  options = options.filter((o)=>o.votes.length > 0)

  if (options == null || options.length == 0) {
    await context.sendText(
      `第 ${election.index} 次午餐結論：目前還沒有任何人投票。`,
      textQuickReply('會議說明')
    );
    return;
  }

  const title =`第 ${election.index} 次午餐結論：吃${options[0].restaurant.name.substring(0, 20)}`

  const contents = options.map(o => {
    return {
      "type": "text",
      "text": `${o.restaurant.name.substring(0, 20)}: ${o.votes.length}`,
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
