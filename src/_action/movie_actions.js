import {ADD,PLAYINGADD,SELECTED,VIDEO,UPCOMING,TOP,DETAILED,CREDIT,KATEGORIE,VIDEOLISTS} from './types';


export const addPopularLists = popularLists => ({ type: ADD, popularLists });

export const addPlayingLists = playingLists => ({ type: PLAYINGADD, playingLists });

export const selectLists = selectMovie => ({ type: SELECTED, selectMovie });

export const addVideo = videoMovie => ({ type: VIDEO, videoMovie });

export const addVideoLists = videoLists => ({ type: VIDEOLISTS, videoLists });

export const addUpcoming = upcomingLists => ({ type: UPCOMING, upcomingLists });

export const addTOP = topLists => ({ type: TOP, topLists });

export const addDetailed = detailedMovie =>({type:DETAILED, detailedMovie})

export const addCredit = creditLists =>({type:CREDIT, creditLists})

export const selectKategorie = kategorie => ({type:KATEGORIE , kategorie});
