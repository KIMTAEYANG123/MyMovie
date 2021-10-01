import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {  useDispatch } from "react-redux";
import {selectLists} from '../../_action/movie_actions';

const Foster = styled.img`
    border-radius: 10px;
`
const Title = styled.h1`
    text-align: center;
    font-size: 14px;
    color: white;
    display: block;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    width:300px;

`

const Overview  = styled.span`
    font-size: 11px;
    color: white;
    margin-bottom: auto;
    
`
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
`
const HoverBox = styled.div`
    border-radius: 10px;
    position: absolute;
    width: 300px;
    height: 300px;
   
    &:hover{
        z-index: 3;
        background-color: rgba(26, 25, 28, 0.95);
        ${Contents} {
            display: flex;
        }
    }
    ${Contents} {
        display: none;
    }
`

const Span = styled.span`
    z-index: 3;
    position: absolute;
    color: white;
    font-size: 26px;
`
const MovieLink = styled(Link)`
     text-decoration:none ;
     &:link{
        color: black;
     }
     &:visited{
        color: black;
     }
`
const Button = styled.button`
    background-color: black;
    color: white;
    border: none;
    padding: 1rem 0;
    cursor: pointer;
    width: 300px;
    border-radius: 0 0 10px 10px;

`
const Movie = styled.div`
    display: flex;
    margin-left:1rem;
    position: relative;
    flex-direction: column;
    align-items: center;
`
const Release = styled.span`
    margin-top:2rem;
    color: white;
`
const Vote = styled.span`
    color: white;
`
function MovieView({list,idx}) {

    const dispatch = useDispatch();



    return (
            <Movie onClick={()=>{ dispatch(selectLists(list))}}>
                <HoverBox>
                    <Contents>
                        <Release>개봉 {list.release_date}</Release>
                        <Vote>평점 {list.vote_average}</Vote>
                        <Overview>{list.overview}</Overview>
                        <MovieLink to={`/movie/${list.id}`}>
                            <Button>상세 보기 </Button>
                        </MovieLink>
                    </Contents>
                </HoverBox>
                <Span>{idx}</Span>
                <Foster width="300px" height="300px" src={`https://image.tmdb.org/t/p/w500${list.poster_path}`} alt={list.title}/>
                <Title>{list.title}</Title>
            </Movie>
    )
}

export default MovieView
