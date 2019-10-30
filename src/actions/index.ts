import { router, text } from 'bottender/router';

import debug from './debug';
import menu from './menu';

import userShow from './users/show';
import userUpdate from './users/update';
import userIndex from './users/index';

import restaurantCreate from './restaurants/create';
import restaurantDelete from './restaurants/delete';
import restaurantIndex from './restaurants/index';

import electionCreate from './elections/create';
import electionShow from './elections/show';

import voteCreate from './votes/create';
import voteDelete from './votes/delete';

export default async function ActionsRouter() {
  return router([
    {
      predicate: context => context.text == 'follow' || context.text == 'join',
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
    text('*', debug),
  ]);
}
