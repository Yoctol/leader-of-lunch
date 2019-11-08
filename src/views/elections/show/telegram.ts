import { chunk, sortBy } from 'lodash';

export default async function ElectionsCreateTelegram(context) {
  const election = context.viewModel.election;
  const options = sortBy(election.options, o=>o.id);

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

  const optionsDesc = options.map(option => {
    return `${option.index} ${option.restaurant.name}`;
  });

  const keyboardOptions = optionsDesc.map(desc => {
    return {
        text: desc,
    }
  })

  keyboardOptions.push({
    text: "吃別的"
  })

  const keyboard = chunk(keyboardOptions, Math.floor(Math.sqrt(keyboardOptions.length)))


  await context.sendText(`第 ${election.index} 次午餐會議：\n${optionsDesc.join('\n')}`, {
    replyMarkup: {
      keyboard
  });
}
