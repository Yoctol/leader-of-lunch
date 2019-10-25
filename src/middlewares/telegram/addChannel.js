module.exports = async function TelegramAddChannel(context, { next }) {
  const key = context.event.rawEvent.message.chat.id;
  console.log(`set channel ${key}`);

  context.channel = await context.models.Channel.findOrCreate({ key });
  return next;
};
