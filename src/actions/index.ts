import { router, text } from 'bottender/router';

import debug from './debug';
import index from './home/index';
import readme from './home/readme';

import userShow from './users/show';
import userUpdate from './users/update';
import userIndex from './users/index';

import restaurantCreate from './restaurants/create';
import restaurantDelete from './restaurants/delete';
import restaurantIndex from './restaurants/index';

import electionCreate from './elections/create';
import electionResult from './elections/result';

import optionCreate from './options/create';
import optionsCreateRandom from './options/createRandom';

import voteCreate from './votes/create';
import voteDelete from './votes/delete';

export default async function ActionsRouter() {
  return router([
    {
      predicate: context => context.text == 'follow' || context.text == 'join',
      action: index,
    },
    text(/\/start|開始使用|LOL|LoL|lol|午餐隊長/, index),
    text(/^(readme|menu|help|教學|[?？])$/, readme),
    text(/^(?<section>.+)說明$/, readme),
    text(/^(所有)?餐廳/, restaurantIndex),
    text(/^新增(?<name>[\s\S]+)/, restaurantCreate),
    text(/^刪除(?<name>[\s\S]+)/, restaurantDelete),
    text(/^不吃|pass|(再)?想一下$/, voteDelete),
    text(/吃別的|吃其他的/, optionsCreateRandom),
    text(/^想吃\s*(?<name>.+)$/, optionCreate),
    text(/^(餓|吃|午餐)/, electionCreate),
    text(/^走|出發|統計/, electionResult),
    text(/^(\d+|one|two|three|four).*$/, voteCreate),
    text(/^我是?誰/, userShow),
    text(/^(叫我|我叫)(?<name>.+)/, userUpdate),
    text(['暱稱', 'users'], userIndex),
    text('*', debug),
  ]);
}
