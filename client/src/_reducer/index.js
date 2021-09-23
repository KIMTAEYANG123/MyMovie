import {combineReducers } from 'redux';
import movieLists from './movieLists';

const rootReducers = combineReducers({
    movieLists,
});

export default rootReducers;