import Channel from '../../entity/Channel'

export default async function TelegramAddChannel(context, { next }) {
  const key = context.event.rawEvent.message.chat.id;
  context.channel = await Channel.findOne({ key })
  if(context.channel == null){
    context.channel = new Channel();
    context.channel.key = key;
    await context.channel.save()
  }
  console.log(`set channel ${key}`);
  return next;
};
