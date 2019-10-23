module.exports = async function ElectionsCreateTelegram(context) {
  const restaurants = context.viewModel.restaurants;

  if (restaurants == null || restaurants.length == 0) {
    await context.sendText(`目前沒有任何餐廳，請先新增餐廳再建立票選活動。`, {
      replyMarkup: {
        keyboard: [
          [
            {
              text: '新增漢堡王',
            },
          ],
        ],
      },
    });
    return;
  }

  const optionsDesc = restaurants.map((restaurant, index) => {
    return `${index + 1} ${restaurant}`;
  });

  await context.sendText(`想吃什麼\n${optionsDesc.join('\n')}`, {
    replyMarkup: {
      keyboard: optionsDesc.map(desc => {
        return [
          {
            text: desc,
          },
        ];
      }),
    },
  });
};
