import { chain } from 'bottender'
import { router, platform } from 'bottender/router'
import line from './line'
import telegram from './telegram'
import slack from './slack'

export default router([
  platform('line', line),
  platform('slack', slack),
  platform('telegram', telegram),
])