import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Main = styled.div`
    display: flex;
    width: 700px;
    margin: 0 auto;
    height: 900px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin:  auto;
    color: white;
`
const Input = styled.input`
    width:200px;
    padding: 0.7rem;
    margin-bottom: 1rem;
`

const Button =styled.button`
    background-color: #1E90FF;
    color:white;
    padding:0.5rem;
    border: none;
    border-radius: 10px;
`
function LoginPage() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const onChangeHandler = (e)=>{
        const {
            target : {name}
        } = e;

        if(name === 'email'){
            setEmail(e.target.value)
        }else{
            setPassword(e.target.value)
        }
    }

    const onSubmitHandler = async (event) =>{
        event.preventDefault();

        const body = {
            email : email,
            password : password
        }

        const {data} = await axios.post('/api/login', body);
        if(data.loginSuccess){
            history.push('/')
        }else{
            console.log('ㅎㅇ')
        }

    }

    return (
        <Main>
            <Form  onSubmit={onSubmitHandler}>
                <label>이메일</label>
                <Input type='email' name ="email" value={email} onChange={onChangeHandler} placeholder='이메일을 입력하세요'/>
                <label>비밀번호</label>
                <Input type='password' name='password' value={password} onChange={onChangeHandler} placeholder='비밀번호를 입력하세요'/>
                <Button type='submit'>로그인</Button>
            </Form>
        </Main>
    )
}

export default LoginPage
