module.exports = async function SlackAddChannel(context, { next }) {
  const key =
    context.event.rawEvent.channel || context.event.rawEvent.item.channel;
  console.log(`set channel ${key}`);

  context.channel = await context.models.Channel.findOrCreate({ key });
  return next;
};
