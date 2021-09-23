import React from 'react'
import styled from 'styled-components'

const Contents = styled.div`
    margin-left: 1rem;
    
`
function CommentLists({comment}) {

    return (
        <div>
            <div>
                <h3>{comment.userFrom.name}</h3>
            </div>
            <Contents>
                {comment.commentContents}
            </Contents>
        </div>
    )
}

export default CommentLists
