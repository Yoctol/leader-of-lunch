import Channel from '../../entity/Channel';

export default async function TelegramAddChannel(context, { next }) {
  const key = context.event.rawEvent.message.chat.id;
  context.channel = await Channel.findOrCreateBy({ key })

  console.log(`set channel ${key}`);
  return next;
}
