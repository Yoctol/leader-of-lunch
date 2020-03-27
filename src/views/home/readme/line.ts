import linkBubble from '../../shared/linkBubble'

export default async function ReadmeLine(context) {
  const documents = context.viewModel.documents
  const contents = documents.map((doc)=>{
    const bubbleContents:any = [
      {
        "type": "text",
        "text": doc.section,
        "size": "xl",
        "weight": "bold"
      },
      {
        "type": "separator",
        "margin": "md",
        "color": "#000000"
      }
    ]
    doc.topics.forEach(topic => {
      bubbleContents.push({
        "type": "text",
        "text": topic.title,
        "size": "xs",
        "weight": "bold",
        "color": "#333333",
        "margin": "lg"
      })
      bubbleContents.push({
        "type": "text",
        "text": topic.description,
        "size": "sm",
        "color": "#666666",
        "wrap": true,
        "margin": "sm"
      })
    })

    return {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": bubbleContents
      }
    }
  })

  const carousel = {
    "type": "carousel",
    "contents": [...contents, linkBubble]
  }
  await context.sendFlex('功能說明', carousel);
}
