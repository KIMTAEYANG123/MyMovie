import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {  useParams } from 'react-router'
import styled from 'styled-components'
import { getCreditAPI, getDetailedAPI } from '../api/movieAPI'
import Credits from '../components/Credits'
import {addCredit} from '../_action/movie_actions';

const Contents = styled.div`
position: absolute;
height: 500px;
width:40%;
color:white;
background: linear-gradient(to right,#181818 10%,rgba(23,23,23,.98) 20%,rgba(23,23,23,.97) 25%,rgba(23,23,23,.95) 35%,rgba(23,23,23,.94) 40%,rgba(23,23,23,.92) 45%,rgba(23,23,23,.9) 50%,rgba(23,23,23,.87) 55%,rgba(23,23,23,.82) 60%,rgba(23,23,23,.75) 65%,rgba(23,23,23,.63) 70%,rgba(23,23,23,.45) 75%,rgba(23,23,23,.27) 80%,rgba(23,23,23,.15) 85%,rgba(23,23,23,.08) 90%,rgba(23,23,23,.03) 95%,rgba(23,23,23,0) 100%);        
`

const MovieImage = styled.div`
    background-image: url(${p=> p.bg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 500px;
`
const Main = styled.div`
    margin: 0 auto;
    width:1600px;
    display: flex;
    flex-direction: column;
`
const Overview = styled.span`
    font-size: 14px;
    margin-top: 3rem;
`

const Title = styled.h1`
   
`
const Baner = styled.div`
    min-width: 800px;
    position: relative;
`

const Info = styled.div`
    display: flex;
    width: 500px;
    flex-direction: column;
    margin: 10rem 0 0 7rem;
`
const Date = styled.span`
    color:#98989C;
`

const ImgContents =styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Button = styled.button`
    margin: 0 auto;
    background-color: #1E90FF;
    color:white;
    padding:1rem;
    border: none;
    border-radius: 10px;
`

const Kategorie = styled.ul`
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
function DetailedPage() {
    
    const {id} = useParams();
    const [movie, setMovie] = useState();
    const [count,setCount] = useState(10);
    const {creditLists} = useSelector(state => state.movieLists)

    const [kate,setKate] = useState({
        credits : true,
        video : false,
        comment : false,
    });

    const dispatch = useDispatch();

    useEffect(() => {
       getDetailedAPI(id).then(res=>{
            setMovie(res.data)
       })
       getCreditAPI(id).then(res=>{
           dispatch(addCredit(res.data.cast))
       })
    }, [])
    
    const newCreditLists = creditLists.filter( (cL,i) => (i<count))
    const len = creditLists.length ; 

    const onClickCount = (e)=>{
        e.preventDefault();
        if(len > count ){
            setCount(s => s+10)
        }
    }
    return (
        <Main>
            <Baner>
                <Contents>
                {movie && 
                    <Info> 
                        <Title>{movie.title}</Title>
                        <div>
                            <Date>{movie.release_date} | </Date> 
                            <Date>{movie.runtime}분 | </Date>
                            <Date>{movie.genres[0].name}</Date>
                        </div>
                        <Overview>{movie.overview}</Overview>
                    </Info>
                }
                </Contents>
                {movie && <MovieImage bg={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/>}
            </Baner>

            <Kategorie>
                <List credits={kate.credits} name='credits'>출연</List>
                <List video={kate.video} name ='video'>영상/포토</List>
                <List comment={kate.comment} name ='comment'>댓글</List>
            </Kategorie>

            <ImgContents>
                {
                    newCreditLists.map( creditList => (<Credits key={creditList.id} creditList={creditList}/>))
                }
            </ImgContents>
            {movie && <Button onClick={onClickCount}>더 보기</Button>}
        </Main>
    )
}

export default DetailedPage
