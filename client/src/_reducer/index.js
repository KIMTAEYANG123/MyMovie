import {combineReducers } from 'redux';
import movieLists from './movieLists';
import searchLists from './searchLists';

const rootReducers = combineReducers({
    movieLists,
    searchLists
});

export default rootReducers;