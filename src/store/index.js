import { createStore } from 'redux';
import reducers from './reducers/';
import reducer from './reducers/';

export default function initStore() {
  return createStore(reducers, {});
}
