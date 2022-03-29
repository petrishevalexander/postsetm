import {combineReducers, createStore} from 'redux';
import {postReducer} from './reducers';

const rootReducer = combineReducers({
  postReducer: postReducer,
});

export const store = createStore(rootReducer);
