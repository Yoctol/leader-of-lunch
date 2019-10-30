export default async function ElectionsCreateTelegram(context) {
  const options = context.viewModel.options;

  if (options == null || options.length == 0) {
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

  console.log(options);
  const optionsDesc = options.map(option => {
    return `${option.index} ${option.restaurant.name}`;
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
}
