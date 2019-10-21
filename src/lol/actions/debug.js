module.exports = async function Debug(context, args){
  if(process.env.ENV != 'development'){
    return;
  }
  const event = context.event
  const event_json = JSON.stringify(event)
  console.log(event_json)
  await context.sendText(JSON.stringify(context.event));
}