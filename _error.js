const Sentry = require('@sentry/node');
Sentry.init({ dsn: process.env.SENTRY_DSN });

module.exports = async function HandleError(context, props) {
  console.error(props.error);
  if (process.env.NODE_ENV === 'production') {
    Sentry.captureException(props.error);
  }
  if (process.env.NODE_ENV === 'development') {
    // console.error(props.error);
  }
};

