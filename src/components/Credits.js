import React from 'react'
import styled from 'styled-components';

const Profile = styled.img`
    width:300px;
    height: 300px;

`
const CreditsContetns = styled.div`
    color: white;
    display: flex;
    margin-left: 1rem;
    flex-direction: column;
`

function Credits({creditList}) {

    return (
        
        <>
            { creditList.profile_path &&
            <CreditsContetns>
                <Profile src={`https://image.tmdb.org/t/p/original${creditList.profile_path}`} alt={`gd`}/>
                <h3>{creditList.name}</h3>
            </CreditsContetns>
            }
        </>
       
    )
}

export default Credits
