module.exports = async function AddText(context, { next }){
  context.text = context.event.text

  // reaction removed feature
  if(context.event.rawEvent.type === 'reaction_added'){
    context.text = context.text || context.event.rawEvent.reaction
  }

  // reaction added feature
  if(context.event.rawEvent.type === 'reaction_removed'){
    context.text = '不吃'
  }

  // default
  context.text = context.text || ''
  console.log(`set text: ${context.text}`)
  return next;
}