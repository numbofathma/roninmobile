import {combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';
import projects from './modules/projects';
import socials from './modules/socials';

const rootReducer = combineReducers({
    projects,
    socials
});

export const initStore = (state = initialState) => {
    return createStore(
        rootReducer,
        state,
        composeWithDevTools()
    );
};
