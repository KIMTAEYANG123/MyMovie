import React,{useEffect} from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoAPI ,getDetailedAPI} from '../api/movieAPI';
import {addVideo,addDetailed} from '../_action/movie_actions';
import Youtube from './Youtube';

const SelectMovie = styled.div`
  background-image: url(${(props) => props.bg});
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
`
const VideoContents =styled.div`
    display: flex;

    position: sticky;
    z-index: 3;
    top:0px;
`
const MovieImage = styled.div`
    width:500px;
    display: flex;
    flex-direction: column;
    color: white;
    position: absolute;
    top: 140px;
    left: 200px;
    background: rgb(20,20,20,40%);
`
const Title = styled.span`
    font-size: 30px;
`

const Info = styled.span`
    color:#98989C;
    margin-left: 1rem;
`

function Video() {

    // store에 접근하여 state 가져오기
   const {selectMovie} = useSelector(state => state.movieLists);
   const {videoMoive} = useSelector(state => state.movieLists);
   const{detailedMovie} = useSelector(state => state.movieLists);

   const dispatch = useDispatch();
   useEffect(() => {
       getVideoAPI(selectMovie.id).then(res=>{
            dispatch(addVideo(res.data.results[0]))
       })

       getDetailedAPI(selectMovie.id).then(res =>{
            dispatch(addDetailed(res.data))
        })
   }, [selectMovie.id])


    return (
        <VideoContents>
            
        {videoMoive && 
            <Youtube videoMoive={videoMoive} height={'400px'}/>
        }
        {
         !videoMoive  &&  
            <SelectMovie bg={`https://image.tmdb.org/t/p/original${selectMovie.backdrop_path}`}>
                <MovieImage>
                    <Title>{detailedMovie.title}</Title>
                    <div>
                        <span><Info>개봉</Info> {detailedMovie.release_date}</span>
                        <span><Info>런타임</Info> {detailedMovie.runtime}분</span>
                    </div>
                    <span>{detailedMovie.overview}</span>
                </MovieImage>
            </SelectMovie>
        }
       </VideoContents>
    )
}

export default Video
