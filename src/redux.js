import { createStore, combineReducers } from 'redux'
import counter from './reducers/counter'

//////////
// actions
export const inc = () => ({ type: 'INC' });
  
export const dec = () => ({ type: 'DEC' }); 

  
export const reducers = combineReducers({ counter });

////////
// store
export function configureStore() {
    const store = createStore(reducers, { });
    return store;
};
  
export const store = configureStore();