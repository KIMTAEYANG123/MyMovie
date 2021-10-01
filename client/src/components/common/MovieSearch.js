import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { getMovieSearch } from '../../api/searchAPI'
import { searchedMovie } from '../../_action/search_actions'

const Search = styled.input`
  min-width: 300px;
  background-color: transparent;
  border: none;
  color: white;
  padding: 1rem;
  font-size: 17px;
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

function MovieSearch() {
  
    const [value, setValue] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();
    
    const onSearch = (e)=>{
      setValue(e.target.value);
    }

    const onSubmitHandler = (e)=>{
      e.preventDefault();
      getMovieSearch(value).then(res=>{
        if(res.data.total_results > 0){
          dispatch(searchedMovie(res.data.results))
          setValue('');
          history.push(`/search-movie/${value}`);
          return;
        }else{
          setValue('');
          alert('검색한 영화가 없습니다.');
        }
      })
    }
    
    return (
        <Form  onSubmit={onSubmitHandler}>
          <Search type='text' placeholder='영화명을 검색하세요' value={value} onChange={onSearch}/>
          <Button type='submit' value="검색"/>
        </Form>
    )
}

export default MovieSearch
