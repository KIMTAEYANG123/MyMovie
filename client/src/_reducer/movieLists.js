
import {ADD,PLAYINGADD,SELECTED,CREDIT, UPCOMING, VIDEO,TOP,DETAILED, KATEGORIE,VIDEOLISTS, LOGIN} from '../_action/types';


const initalState = {
  popularLists: [],
  playingLists :[],
  selectMovie : [],
  videoMoive : {},
  upcomingLists : [],
  topLists: [],
  detailedMovie: {},
  creditLists : [],
  kategorie : {
    credits : true,
    video : false,
    comment : false,
  },
  videoLists : [],
  login : false
};

const movieLists = (state = initalState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        popularLists: action.popularLists
      };
    case PLAYINGADD:
      return {
        ...state,
        playingLists: action.playingLists
      }
    case SELECTED:
      return {
        ...state,
        selectMovie: action.selectMovie
      }
    case VIDEO:
      return {
        ...state,
        videoMoive : action.videoMovie
      }
    case UPCOMING:
      return {
        ...state,
        upcomingLists : action.upcomingLists
      }
    case TOP:
      return {
        ...state,
        topLists : action.topLists
      }
    case DETAILED:
      return {
        ...state,
        detailedMovie: action.detailedMovie
      }
    case CREDIT:
      return {
        ...state,
        creditLists: action.creditLists
      };
    case KATEGORIE:
      return {
        ...state,
        kategorie : action.kategorie
      }
    case VIDEOLISTS:
      return {
        ...state,
        videoLists : action.videoLists
      }
    case LOGIN:
      return {
        ...state,
        login: action.login
      };
    
    // default를 쓰지 않으면 맨처음 state에 state값이 undefined가 나오게 돼서 default문을 넣어야 함
    default:
      return state;
  }
};

export default movieLists;