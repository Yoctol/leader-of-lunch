module.exports = async function AddText(context, { next }){
  context.text = context.event.text || context.event.rawEvent.type

  if(context.event.rawEvent.type == 'follow' || context.event.rawEvent.type == 'join'){
    context.text = 'menu'
  }

  // // default
  context.text = context.text || ''
  console.log(`set text: ${context.text}`)
  return next;
}