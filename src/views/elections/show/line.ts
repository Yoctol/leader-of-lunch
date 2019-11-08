export default async function ElectionsCreateLine(context) {
  const options = context.viewModel.election.options;

  if (options == null || options.length == 0) {
    await context.sendText(`目前沒有任何餐廳，請先新增餐廳再建立票選活動。`, {
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

  const optionsDesc = options.map((option) => {
    return `${option.index} ${option.restaurant.name}`;
  });
  const altText = `本日菜單\n${optionsDesc.join('\n')}`.substring(0, 100);

  const bubbleContents = [];

  optionsDesc.forEach((option, index) => {
    if (index > 0) {
      bubbleContents.push({
        type: 'separator',
        margin: 'md',
        color: '#e0e0e0',
      });
    }
    bubbleContents.push({
      type: 'button',
      action: {
        type: 'message',
        label: option,
        text: option,
      },
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
          text: '想吃什麼？',
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
