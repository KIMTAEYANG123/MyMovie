import React,{useState} from 'react'
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
    padding: 1rem;
`

const Bar = styled.div`
    display: flex;
    background-color: black;
    justify-content: right;
    margin-bottom: 1rem;
`
function Header() {

    const cookies = new Cookies();
    const history = useHistory();
    const {login} = useSelector(state => state.movieLists)

    const dispatch = useDispatch();

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
             {!cookies.get('x_auth') &&<Link to="/login"><LoginButton>로그인</LoginButton> </Link>}
            {cookies.get('x_auth') && <LoginButton onClick={onClick}>로그아웃</LoginButton> }
        </Bar>
    )
}

export default Header
