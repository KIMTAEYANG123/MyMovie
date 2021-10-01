
import { SEARCH } from '../_action/types';


const initalState = {
    searchMovies : [],
};


const searchLists = (state = initalState, action) => {

    switch (action.type) {
      case SEARCH:
        return {
          ...state,
          searchMovies: action.searchMovies
        };
      
      // default를 쓰지 않으면 맨처음 state에 state값이 undefined가 나오게 돼서 default문을 넣어야 함
      default:
        return state;
    }
  };

  export default searchLists;
