import React,{useState} from 'react'
import styled from 'styled-components'

const JoinContents = styled.div`
    display: flex;
    max-width:1000px;
    height: 888px;
    justify-content: center;
    color: white;
    margin: 0 auto;
`
const Main = styled.div`
    display: flex;
    margin: auto 0;
    width:320px;
    flex-direction: column;
`
const Input = styled.input`
    border: none;
    border-radius: 3px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 1rem;
`
const Button = styled.button`
    background-color: #1E90FF;
    border-radius: 10px;
    color: white;
    padding: 1rem;
    border: none;
`
function UserJoin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')

    const onChange = (e)=>{
        const {
            target : {name}
        } = e;
        console.log(name)
        if(name === 'email'){
            setEmail(e.target.value);
        }else if(name === 'password'){
            setPassword(e.target.value)
        }else if(name === 'passwordCheck'){
            setPasswordCheck(e.target.value)
        }
    }
    return (
        <div>
            <JoinContents>
                <Main>
                    <label>이메일</label>
                    <Input type='email' name='email' onChange={onChange} value={email}/>

                    <label>비밀번호</label>
                    <Input type='password' name='password'  onChange={onChange} value={password}/>

                    <label>비밀번호 확인</label>
                    <Input type='password' name='passwordCheck' onChange={onChange} value={passwordCheck}/>
                    <Button>회원가입</Button>?
                </Main>
            </JoinContents>
        </div>
    )
}

export default UserJoin
