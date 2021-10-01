import React,{useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import styled from 'styled-components'
import Cookies from 'universal-cookie';
import axios from 'axios';
import { getLogin } from '../../_action/movie_actions';

const LoginButton = styled.button`
    color:white;
    border: none;
    background-color: #1E90FF;
    padding: 0.8rem;
   
`

const Bar = styled.div`
    display: flex;
    justify-content: right;
    margin-bottom: 1rem;
    align-items: center;
    margin: 0 1rem;
    min-width: 500px;
`

const Home = styled.h3`
    color:white;
`
const HomeLink = styled(Link)`
    margin: 0 auto 0 0;

`
function Header() {

    const cookies = new Cookies();
    const history = useHistory();
    const dispatch = useDispatch();
    
    const {login} = useSelector(state => state.movieLists)


    const onClick =  async (e)=>{
        e.preventDefault();
        const {data} = await axios.get('/api/logout');

        if(data.success){
            cookies.remove('x_auth')
            dispatch(getLogin(false))
            history.push('/')
        }
    }
    return (
        <Bar>
             <HomeLink to="/"><Home>Home</Home></HomeLink>
             {!login &&<Link to="/login"><LoginButton>로그인</LoginButton> </Link>}
            {login && <LoginButton onClick={onClick}>로그아웃</LoginButton> }
        </Bar>
    )
}

export default Header
