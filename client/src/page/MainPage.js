import React,{useEffect,useState} from 'react';
import {getPopularAPI,getPlayingAPI,getUpcomingAPI,getTopAPI} from '../api/movieAPI';
import { useSelector, useDispatch } from "react-redux";
import { addPopularLists ,addPlayingLists,selectLists,addUpcoming, addTOP} from "../_action/movie_actions";
import Swipers from '../components/common/Swipers';
import Video from '../components/Video';
import styled from 'styled-components';
import MovieSearch from '../components/common/MovieSearch';
import MovieView from '../components/common/MovieView';


const Header = styled.h3`
  color: white;
`

function MainPage() {

    const [loading, setLoading] = useState(false);
    const {selectMovie} = useSelector(state => state.movieLists)
    
    // dispatch를 사용하기 위한 준비
    const dispatch = useDispatch();
  
    useEffect(() => {
     
      getPopularAPI().then(res => {
        // store에 있는 state 바꾸는 함수 실행
        dispatch(selectLists(res.data.results[0]))
      })
     
    }, [selectMovie])

    useEffect(() => {
     
        getPopularAPI().then(res => {
          // store에 있는 state 바꾸는 함수 실행
          dispatch(addPopularLists(res.data.results))
          dispatch(selectLists(res.data.results[0]))
          setLoading(true)
        })
        getPlayingAPI().then(res =>{
          dispatch(addPlayingLists(res.data.results))
        })
        getUpcomingAPI().then(res =>{
          dispatch(addUpcoming(res.data.results))
        })
        getTopAPI().then(res=>{
          dispatch(addTOP(res.data.results))
        })
      }, [])

     

    return (
      <>
        {loading && <Video/>}
        <MovieSearch />
        <>
          <Header>인기 영화</Header>
          <Swipers popular/>
          <Header>상영중인 영화</Header>
          <Swipers playing/>
          <Header>다가오는 영화</Header>
          <Swipers upcoming/>
          <Header>평점순 영화</Header>
          <Swipers top/>
        </>
        
      </>
    )
}

export default MainPage
