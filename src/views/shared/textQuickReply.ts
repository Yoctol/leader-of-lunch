import { isArray } from 'lodash'

function toTextAction(text){
  return {
    type: 'action',
    action: {
      type: 'message',
      label: text,
      text: text,
    },
  }
}

export default function textQuickReply(textOrTexts){
  let texts = textOrTexts
  if (!isArray(texts)){
    texts = [texts]
  }

  return {
    quickReply: {
      items: texts.map(toTextAction)
    }
  }
}
