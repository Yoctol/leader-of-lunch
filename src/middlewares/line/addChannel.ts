export default async function LineAddChannel(context, { next }) {
  // const source = context.event.rawEvent.source;
  // const key = source.groupId || source.roomId || source.userId;
  // console.log(`set channel ${key}`);

  // context.channel = await context.models.Channel.findOrCreate({ key });
  return next;
}
