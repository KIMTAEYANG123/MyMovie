import React,{useEffect,useState} from 'react';
import {getPopularAPI,getPlayingAPI,getUpcomingAPI,getTopAPI} from '../api/movieAPI';
import {  useDispatch } from "react-redux";
import { addPopularLists ,addPlayingLists,selectLists,addUpcoming, addTOP} from "../_action/movie_actions";
import Swipers from '../components/common/Swipers';
import Video from '../components/Video';
import styled from 'styled-components';


const Header = styled.h3`
  color: white;
`
const Search = styled.input`
  min-width: 300px;
  background-color: transparent;
  border: none;
  color: white;
  padding: 1rem;
  font-size: 14px;
  text-align: center;
`
const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`
const Button =styled.input`
    background-color: transparent;
    border: none;
    color: white;
    font-size: 14px;
    text-align: center;
`
function MainPage() {

    const [loading, setLoading] = useState(false);

    // dispatch를 사용하기 위한 준비
    const dispatch = useDispatch();
  
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
        <Form  onSubmit=''>
          <Search type='text' placeholder='영화명을 검색하세요'/>
          <Button type='submit' value="검색"/>
        </Form>
        <Header>인기 영화</Header>
        <Swipers popular/>
        <Header>상영중인 영화</Header>
        <Swipers playing/>
        <Header>다가오는 영화</Header>
        <Swipers upcoming/>
        <Header>평점순 영화</Header>
        <Swipers top/>
      </>
    )
}

export default MainPage
