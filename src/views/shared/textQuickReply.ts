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

export default function textQuickReply(texts){
  if (isArray(texts)){
    return {
      quickReply: {
        items: texts.map(toTextAction)
      }
    }
  }else{
    return {
      quickReply: {
        items: [toTextAction(texts)]
      }
    }
  }
}