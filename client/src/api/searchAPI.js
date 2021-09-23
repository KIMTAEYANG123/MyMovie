import {searchURL} from '../config';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY; 

export const getMovieSearch = async (query) =>{
    const data =await axios.get(`${searchURL}movie?api_key=${apiKey}&language=ko&page=1&include_adult=false&query=${query}`)
    return data;
}