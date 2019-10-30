import Channel from '../../entity/Channel';

export default async function LineAddChannel(context, { next }) {
  const source = context.event.rawEvent.source;
  const key = source.groupId || source.roomId || source.userId;
  context.channel = await Channel.findOrCreateBy({ key })

  console.log(`set channel ${key}`);
  return next;
}
