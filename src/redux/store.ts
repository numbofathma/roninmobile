import {
  createStore, applyMiddleware, combineReducers, AnyAction,
} from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  createWrapper, HYDRATE,
} from 'next-redux-wrapper';
import projects from './modules/projects';
import socials from './modules/socials';
import { State } from './state';
import initialState from './initialState';

const combinedReducer = combineReducers({
  projects,
  socials,
});

const rootReducer = (state: State = initialState, action?: AnyAction) => {
  if (action && action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  }

  return combinedReducer(state, action || { type: undefined });
};

const bindMiddleware = (middleware: never[]) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const initStore = () => createStore(rootReducer, bindMiddleware([]));

export const wrapper = createWrapper(initStore);
