const { router, text } = require('bottender/router');

const debug = require('./debug')
const menu = require('./menu')

const userShow = require('./users/show')
const userUpdate = require('./users/update')
const userIndex = require('./users/index')

const restaurantCreate = require('./restaurants/create')
const restaurantDelete = require('./restaurants/delete')
const restaurantIndex = require('./restaurants/index')

const electionCreate = require('./elections/create')
const electionShow = require('./elections/show')

const voteCreate = require('./votes/create')
const voteDelete = require('./votes/delete')

module.exports = async function ActionsRouter(){
  return router([
    {
      predicate: (context) => context.text == 'follow' || context.text == 'join',
      action: menu,
    },
    text(/menu|help|午餐隊長|教學|\/start|開始使用/, menu),
    text(/^餐廳/, restaurantIndex),
    text(/^新增(?<name>[\s\S]+)/, restaurantCreate),
    text(/^刪除(?<name>[\s\S]+)/, restaurantDelete),
    text(/^不吃|pass/, voteDelete),
    text(/^(餓|想?吃|午餐)/, electionCreate),
    text(/^走|出發|統計/, electionShow),
    text(/^(1|2|3|4|one|two|three|four).*$/, voteCreate),
    text(/^我是?誰/, userShow),
    text(/^(叫我|我叫)(?<name>.+)/, userUpdate),
    text(['暱稱', 'users'], userIndex),
    text("*", debug),
  ])
}