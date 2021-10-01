import React, { useEffect } from 'react'
import MovieSearch from '../components/common/MovieSearch'
import {useSelector,useDispatch} from 'react-redux';
import Video from '../components/Video'
import MovieView from '../components/common/MovieView';
import { useParams } from 'react-router';
import { selectLists } from '../_action/movie_actions';
import { searchedMovie } from '../_action/search_actions';
import { getMovieSearch } from '../api/searchAPI';
import styled from 'styled-components';

const MovieMain = styled.div`
    display: flex;
`
const MovieContents = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1592px;

`
function SearchPage() {

    const {selectMovie} = useSelector(state => state.movieLists)
    const dispatch = useDispatch();
    const {name} = useParams();
    
    const {searchMovies} = useSelector(state => state.searchLists)
    useEffect(() => {
        
        getMovieSearch(name).then(res=>{
            if(res.data.total_results > 0){
                dispatch(searchedMovie(res.data.results))
                dispatch(selectLists(res.data.results[0]))
            }else{
              alert('검색한 영화가 없습니다.');
            }
          })
    }, [name])

    return (
        <div>
            {selectMovie && <Video />}
            <MovieSearch />
            <MovieMain>
                <MovieContents>
                { 
                    searchMovies.length > 0 && searchMovies.map( (searchMovie,idx)=>( 
                    <MovieView 
                        key={searchMovie.id} 
                        list={searchMovie} 
                        idx={idx}/>))
                }
                </MovieContents>
            </MovieMain>
            
        </div>
    )
}

export default SearchPage
