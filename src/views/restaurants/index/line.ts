import { chunk, sortBy } from 'lodash';

const columnNumber = 2

function restaurantView(restaurant){
  return {
    type: 'box',
    layout: 'horizontal',
    flex: 1,
    contents: [
      {
        type: 'text',
        text: restaurant,
        color: '#666666',
        size: 'sm',
        gravity: 'center',
        wrap: true,
      },
      {
        type: 'text',
        text: '❌',
        size: 'sm',
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
  }
}

function restaurantRow(restaurants){
  const contents = restaurants.map((restaurant)=> restaurantView(restaurant))
  for(let i = contents.length ; i < columnNumber ; i ++){
    contents.push(
      {
        type: 'filler',
        flex: 1,
      }
    )
  }
  return {
    type: 'box',
    layout: 'horizontal',
    contents,
    margin: 'md',
  }
}

function restaurantList(restaurants){
  const columns = chunk(restaurants, columnNumber)
  return columns.map((column)=> restaurantRow(column))
}

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
              label: '餐廳功能說明',
              text: '餐廳功能說明',
            },
          },
        ],
      },
    });
    return;
  }

  const altText = `所有餐廳：\n${restaurants.join('\n')}`.substring(0, 100);

  const bubbleContents:any = [
    {
      "type": "text",
      "text": '所有餐廳',
      "size": "xl",
      "weight": "bold"
    },
    {
      "type": "separator",
      "margin": "md",
      "color": "#000000"
    },
    ...restaurantList(restaurants)
  ]

  const flexContents = {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: bubbleContents,
      paddingAll: '10px',
    },
  };

  await context.replyFlex(altText, flexContents);
}
