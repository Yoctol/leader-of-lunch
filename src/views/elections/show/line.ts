import { chunk, sortBy } from 'lodash';
import textQuickReply from '../../shared/textQuickReply'

function optionView(option){
  return {
    "type": "button",
    "action": {
      "type": "message",
      "label": option,
      "text": option
    },
    "style": "primary",
    "color": "#225588",
    "margin": "md"
  }
}

function optionRow(options, chunkNumber){
  const contents = options.map(option=>optionView(option))
  for(let i = contents.length ; i < chunkNumber ; i++){
    contents.push({
      type: 'filler'
    })
  }
  return {
    type: "box",
    layout: "horizontal",
    contents,
    margin: 'md'
  }
}

function optionList(options){
  options.push('吃別的')
  const chunkNumber = Math.min(Math.floor(Math.sqrt(options.length)), 2)
  const chunkedOptions = chunk(options, chunkNumber)
  return chunkedOptions.map(options => optionRow(options, chunkNumber))
}

export default async function ElectionsCreateLine(context) {
  const election = context.viewModel.election;
  const options = sortBy(election.options, o=>o.id);


  if (options == null || options.length == 0) {
    await context.sendText(
      `目前沒有任何餐廳，請先新增餐廳再發起午餐會議。`,
      textQuickReply('餐廳說明')
    );
    return;
  }

  const optionsDesc = options.map((option) => {
    return `${option.index} ${option.restaurant.name.substring(0, 20)}`;
  });
  const title =`第 ${election.index} 次午餐會議`
  const text = `${title}: ${optionsDesc.join(', ')}`.substring(0, 100);

  const bubbleContents:any = [
    {
      "type": "text",
      "text": title,
      "size": "xl",
      "weight": "bold"
    },
    {
      "type": "separator",
      "margin": "md",
      "color": "#000000"
    },
    ...optionList(optionsDesc)
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

  const quickReply =  textQuickReply("")

  await context.sendFlex(text, bubble, textQuickReply("會議說明"));
}
