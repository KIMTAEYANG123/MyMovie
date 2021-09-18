import React from 'react'
import styled from 'styled-components';

const VideoImage = styled.div`
    background-image: url(${p=>p.bg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 1rem 0 0 1rem;
    width:250px;
    height: 200px;
    border-radius: 10px;

`
const ViWeb = styled.div`
    display: flex;
    flex-direction: column;
`
function VideoLists({videoList}) {

    return (
        <ViWeb>
            <VideoImage bg = {`https://i.ytimg.com/vi_webp/${videoList.key}/hqdefault.webp`}>
            </VideoImage> 
            <span>{videoList.name}</span>
        </ViWeb>
    )
}

export default VideoLists
