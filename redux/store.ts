import {combineReducers, createStore} from 'redux';
import initialState from './initialState';
import projects from './modules/projects';
import socials from './modules/socials';

const rootReducer = combineReducers({
    projects,
    socials
});

/** Store */
const store = createStore(
    rootReducer,
    initialState
);

export default store;
