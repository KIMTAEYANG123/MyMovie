import React,{useState} from 'react'
import styled from 'styled-components'

const JoinContents = styled.div`
    display: flex;
    flex-direction: column;
    max-width:1000px;
    color: white;
    margin: 0 auto;
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
                <label>이메일</label>
                <input type='email' name='email' onChange={onChange} value={email}/>

                <label>비밀번호</label>
                <input type='password' name='password'  onChange={onChange} value={password}/>

                <label>비밀번호 확인</label>
                <input type='password' name='passwordCheck' onChange={onChange} value={passwordCheck}/>
                <button>회원가입</button>
            </JoinContents>
        </div>
    )
}

export default UserJoin
