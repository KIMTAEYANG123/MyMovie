import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import styled from 'styled-components'
import {selectKategorie} from '../_action/movie_actions';

const Kate = styled.ul`
    margin : 3rem 0 3rem 0;
    color:white;
    font-size: 20px;
    display: flex;
    list-style: none;
`
const List = styled.li`
    margin-left : 2rem;
    border-bottom: ${p => p.credits ? '1px solid white' : p => p.video ? '1px solid white' :p => p.comment ? '1px solid white' :''};
    cursor: pointer;
`

function Nav() {

    const {kategorie} =  useSelector(state => state.movieLists)
    const dispatch = useDispatch();

    const onClickKategorie = (e)=>{
        const {
            target:{value}
        }= e;
        if(value === 1){
            const newKategorie = {
                ...kategorie,
                credits: true,
                video : false,
                comment : false
            }
            dispatch(selectKategorie(newKategorie))
        }else if(value === 2){
            const newKategorie = {
                ...kategorie,
                credits: false,
                video : true,
                comment : false
            }
            dispatch(selectKategorie(newKategorie))
        }else{
            const newKategorie = {
                ...kategorie,
                credits: false,
                video : false,
                comment : true
            }
            dispatch(selectKategorie(newKategorie))
        }
    }

    return (
        <Kate>
            <List credits={kategorie.credits} value='1' onClick={onClickKategorie}>출연</List>
            <List video={kategorie.video} value ='2'  onClick={onClickKategorie}>영상/포토</List>
            <List comment={kategorie.comment} value ='3'  onClick={onClickKategorie}>댓글</List>
        </Kate>
    )
}

export default Nav
