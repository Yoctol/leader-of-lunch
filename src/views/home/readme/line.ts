export default async function ReadmeText(context) {
  const documents = context.viewModel.documents

  const carousel = {
    "type": "carousel",
    "contents": documents.map((doc)=>{
      let bubble_contents:any = [
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
        bubble_contents.push({
          "type": "text",
          "text": topic.title,
          "size": "xs",
          "weight": "bold",
          "color": "#333333",
          "margin": "lg"
        })
        bubble_contents.push({
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
          "contents": bubble_contents
        }
      }
    })
  }
  await context.sendFlex('功能說明', carousel);
}
