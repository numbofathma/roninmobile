import {
  createStore, applyMiddleware, combineReducers, Store,
} from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import projects from './modules/projects';
import socials from './modules/socials';
import { State } from './state';
import initialState from './initialState';

const rootReducer = combineReducers({
  projects,
  socials,
});

const bindMiddleware = (middleware: never[]) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const initStore = (state: State = initialState): Store => createStore(
  rootReducer,
  state,
  bindMiddleware([]),
);
