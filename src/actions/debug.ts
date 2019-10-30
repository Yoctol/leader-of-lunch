export default async function Debug(context) {
  if (process.env.ENV != 'development') {
    return;
  }
  await context.sendText(JSON.stringify(context.event));
};
