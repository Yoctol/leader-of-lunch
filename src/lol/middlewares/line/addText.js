module.exports = async function AddText(context, { next }){
  context.text = context.event.text || context.event.rawEvent.type

  // // default
  context.text = context.text || ''
  console.log(`set text: ${context.text}`)
  return next;
}