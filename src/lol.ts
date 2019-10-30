import { chain } from 'bottender';
import middlewares from './middlewares';
import actions from './actions';

export default async function LOL(context: any) {
  if (process.env.ENV == 'development') {
    console.log(context.event.rawEvent);
  }
  return chain([middlewares, actions]);
}
