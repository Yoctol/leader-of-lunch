module.exports = async function Debug(context) {
  if (process.env.ENV != 'development') {
    return;
  }
  const event = context.event;
  await context.sendText(JSON.stringify(context.event));
};
