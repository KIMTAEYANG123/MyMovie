import {movieURL} from '../config';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY; 

console.log(apiKey)
export const getPopularAPI = async()=>{
    const data = await axios.get(`${movieURL}popular?api_key=${apiKey}&language=ko&page=1&region=KR`);
    return data;
}

export const getPlayingAPI = async()=>{
    const data = await axios.get(`${movieURL}now_playing?api_key=${apiKey}&language=ko&page=1&region=KR`);
    return data;
}

export const getUpcomingAPI = async()=>{
    const data = await axios.get(`${movieURL}upcoming?api_key=${apiKey}&language=ko&page=1&region=KR`);
    return data;
}
export const getTopAPI = async()=>{
    const data = await axios.get(`${movieURL}top_rated?api_key=${apiKey}&language=ko&page=1&region=KR`);
    return data;
}

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

export const getDetailedAPI = async(moiveId)=>{
    const data = await axios.get(`${movieURL}${moiveId}?api_key=${apiKey}&language=ko`);
    return data;
}

export const getVideoAPI = async(moiveId)=>{
    const data = await axios.get(`${movieURL}${moiveId}/videos?api_key=${apiKey}&language=ko`);
    return data;
}

export const getCreditAPI = async(moiveId)=>{
    const data = await axios.get(`${movieURL}${moiveId}/credits?api_key=${apiKey}&language=ko`);
    return data;
}