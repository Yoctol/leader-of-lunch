export default async function RestaurantsIndexLine(context) {
  const restaurants: string[] = context.viewModel.restaurants.map(r => r.name);
  if(restaurants.length === 0){
    await context.sendText(`目前沒有任何餐廳，請先新增餐廳。`, {
      quickReply: {
        items: [
          {
            type: 'action',
            action: {
              type: 'message',
              label: '新增漢堡王',
              text: '新增漢堡王',
            },
          },
        ],
      },
    });
    return;
  }

  const altText = `所有餐廳：\n${restaurants.join('\n')}`.substring(0, 100);

  const bubbleContents = [];

  restaurants.forEach((restaurant, index) => {
    if (index > 0) {
      bubbleContents.push({
        type: 'separator',
        margin: 'md',
        color: '#e0e0e0',
      });
    }
    bubbleContents.push({
      type: 'box',
      layout: 'horizontal',
      contents: [
        {
          type: 'text',
          text: restaurant,
          color: '#666666',
          size: 'lg',
          gravity: 'center',
          wrap: true,
        },
        {
          type: 'text',
          text: '❌',
          action: {
            type: 'message',
            label: `刪除${restaurant}`,
            text: `刪除${restaurant}`,
          },
          flex: 0,
          align: 'end',
        },
      ],
      margin: 'md',
    });
  });

  const flexContents = {
    type: 'bubble',
    header: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '所有餐廳',
          size: 'md',
          weight: 'bold',
          color: '#333333',
        },
      ],
      backgroundColor: '#d0e0f0',
      paddingBottom: '12px',
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: bubbleContents,
      paddingAll: '10px',
    },
  };
  await context.replyFlex(altText, flexContents);
}
