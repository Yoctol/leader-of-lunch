import { chain, LineContext, TelegramContext } from 'bottender';
import middlewares from './middlewares';
import actions from './actions';

export default async function LOL(context: LineContext | TelegramContext) {
  if (process.env.NODE_ENV == 'development') {
    console.log(context.event.rawEvent);
  }
  return chain([middlewares, actions]);
}
