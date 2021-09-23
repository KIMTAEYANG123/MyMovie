import axios from 'axios';
import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import CommentLists from '../CommentLists';

const Comments = styled.div`
    color:white;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`
const Modal = styled.div`
    display: flex;
`
const TextArea = styled.textarea`
        resize: none;
        border-radius: 4px;
        border-color: #dddddd;
        background-color: transparent;
        color: white;
        font-size: 20px;
        min-width: 800px;
`

const Button = styled.button`
    margin-left: 2rem;
    background-color: #1E90FF;
    color:white;
    padding:1rem;
    border: none;
    border-radius: 10px;
`

function Comment({id}) {
    
    const [state, setstate] = useState("")
    const [comments, setComments] = useState();
    const [auth ,setAuth] = useState({});

   
    const body = {
        movieId : id,
        commentContents : state,
        userFrom : auth._id
    }
    useEffect(() => {
        axios.post('/api/movie/getComments',body).then(res=>{
            setComments(res.data.comments)
        }).catch(err =>{
            console.log(err)
        })
        axios.get('/api/auth').then(res=>{
            setAuth(res.data)
        })
    }, [])

    const onChange = (e)=>{
        setstate(e.target.value)
    }

    const onAddToComment = async(e)=>{
        e.preventDefault();
        const data = await axios.post('/api/movie/addToComment', body);
        console.log(data)

    }
    console.log(auth)

    return (
        <Comments>
            <Modal>
                <TextArea  value={state} onChange={onChange}/>
                <Button onClick={onAddToComment}>등록</Button>
            </Modal>

            { comments && comments.map( comment => (<CommentLists comment={comment}/>))}
        </Comments>
    )
}

export default Comment;
