import React, { useEffect } from 'react'
import styled from 'styled-components'


const Iframe = styled.iframe`
    width:100%;
    height: ${p=>p.height};

`
function Youtube({videoMoive ,height }) {

    return (
        <>
        { videoMoive && 
        <Iframe height={height} src={`https://www.youtube.com/embed/${videoMoive.key}?autoplay=1`} frameBorder="0" allow="autoplay" title ="youtube">
             <p>현재 사용 중인 브라우저는 iframe 요소를 지원하지 않습니다!</p>
         </Iframe>
        }
       
        </>
    )
}

export default Youtube
