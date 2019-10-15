const { router, route, text } = require('bottender/router');

const debug = require('./debug')
const menu = require('./menu')

const userShow = require('./users/show')
const userUpdate = require('./users/update')

const restaurantCreate = require('./restaurants/create')
const restaurantDelete = require('./restaurants/delete')
const restaurantIndex = require('./restaurants/index')

const electionCreate = require('./elections/create')
const electionShow = require('./elections/show')


const voteCreate = require('./votes/create')
const voteDelete = require('./votes/delete')

module.exports = async function Actions(context, {next}){
  return router([
    text(/menu|help|午餐|隊長/, menu),
    text(/我是?誰/, userShow),
    text(/叫?我(?<name>.+)/, userUpdate),
    text(/餐廳/, restaurantIndex),
    text(/新增(?<name>.+)/, restaurantCreate),
    text(/刪除(?<name>.+)/, restaurantDelete),
    text(/不吃|pass/, voteDelete),
    text(/吃/, electionCreate),
    text(/走/, electionShow),
    text(/^(1|2|3|4|one|two|three|four)$/, voteCreate),
    text("*", debug),
  ])
}