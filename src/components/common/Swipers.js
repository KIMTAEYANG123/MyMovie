import React from 'react'
import { useSelector, useDispatch } from "react-redux";
// Import Swiper React components
import MovieView from './MovieView';
import  '../swiper.css';
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

// import Swiper core and required modules
import SwiperCore, {
    Pagination
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Pagination]);

function Swipers({popular,playing,upcoming,top}) {

     // store에 접근하여 state 가져오기
     const {popularLists} = useSelector(state => state.movieLists);
     const {playingLists} = useSelector(state => state.movieLists);
     const {upcomingLists} = useSelector(state => state.movieLists)
     const {topLists} = useSelector(state => state.movieLists)

    return (
        <Swiper
            slidesPerView={5}   
            slidesPerGroup={5}
            pagination={{ dynamicBullets: true }}          
        >
        {
        popular&& popularLists.map( (popularList,i) =>(
                <SwiperSlide key={popularList.id}>
                    <MovieView list={popularList} idx = {i+1}/>
                </SwiperSlide>
            ))
        }
        {
        playing&& playingLists.map( (playingList,i) =>(
                <SwiperSlide key={playingList.id}>
                    <MovieView list={playingList} idx = {i+1}/>
                </SwiperSlide>
            ))
        }
        {
        upcoming&& upcomingLists.map( (upcomingList,i) =>(
                <SwiperSlide key={upcomingList.id}>
                    <MovieView list={upcomingList} idx = {i+1}/>
                </SwiperSlide>
            ))
        }
         {
        top&& topLists.map( (topList,i) =>(
                <SwiperSlide key={topList.id}>
                    <MovieView list={topList} idx = {i+1}/>
                </SwiperSlide>
            ))
        }
   
        </Swiper>
    )
}

export default Swipers
