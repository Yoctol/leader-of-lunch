module.exports = async function AddText(context, { next }){
  context.text = context.event.text

  // default
  context.text = context.text || ''
  console.log(`set text: ${context.text}`)

  return next;
}