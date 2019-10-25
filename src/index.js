const { chain } = require('bottender');
const middlewares = require('./middlewares');
const actions = require('./actions');

module.exports = async function LOL(context) {
  if(process.env.ENV == "development") {
    console.log(context.event.rawEvent)
  }
  return chain([middlewares, actions]);
};
