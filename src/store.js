import { createStore } from 'redux';
import { userReducer } from './reducers'

export const store = createStore(userReducer);
export const dispatch = store.dispatch;
global.store = store;
