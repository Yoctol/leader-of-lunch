import textQuickReply from '../../shared/textQuickReply'

export default async function IndexLine(context) {
  const text = '我是午餐隊長，不知道午餐要吃什麼的時候，就呼喚我的名字吧！'

  const bubble = {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "午餐隊長",
          "size": "xl",
          "weight": "bold"
        },
        {
          "type": "separator",
          "margin": "md",
          "color": "#000000"
        },
        {
          "type": "text",
          "text": text,
          "size": "sm",
          "color": "#666666",
          "wrap": true,
          "margin": "lg"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "使用說明",
            "text": "使用說明"
          },
          "style": "primary",
          "color": "#225588",
          "margin": "lg"
        },
        {
          "type": "button",
          "action": {
            "type": "uri",
            "label": "意見回饋",
            "uri": "https://forms.gle/6c6qizGP1VGT9K8G6"
          },
          "style": "primary",
          "color": "#225588",
          "margin": "lg"
        }
      ]
    }
  }

  let quickReply =  textQuickReply('餐廳說明')

  if(context.channel.restaurants.length >= 4){
    quickReply = textQuickReply('吃午餐了')
  }

  await context.sendFlex(text, bubble, quickReply);
}
