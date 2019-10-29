export default async function TelegramAddText(context, { next }) {
  context.text = context.event.text;

  // // when join group
  const message = context.event.rawEvent.message;

  if(message){
    if(message.group_chat_created || message.new_chat_member){
      context.text = 'join';
    }
  }

  // default
  context.text = context.text || '';
  console.log(`set text: ${context.text}`);

  return next;
};
