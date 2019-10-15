const { chain } = require('bottender');
const { router, route, text } = require('bottender/router');
const lol = require('./lol')

function send(x){
  return async function (context, { next }) {
    await context.sendText(x);
    return next;
  }
}

function platform(platform_name, action){
  return route(
    context => context.platform == platform_name,
    action
  )
}

module.exports = async function App(context) {
  // await context.sendText("App")
  return lol
};

// chain([
//   chain([
//     addModels,
//     router([
//       platform('line', line),
//       platform('slack', slack),
//       platform('telegram', chain([
//         addChannel,
//         addUser,
//         addText
//       ])),
//     ])
//   ]),
//   actions
// ]);