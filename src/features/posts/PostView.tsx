import React, { ReactElement } from 'react'
import styled from 'styled-components'
import ControlsCaption from '../../app/layout/contols/ControlsCaption'
import ControlsLikes from '../../app/layout/contols/ControlsLikes'
import ControlsPost from '../../app/layout/contols/ControlsPost'
import { Post } from './Post'


//TODO: [√] Render `post` 
//TODO: [] Add `Controls` Components
interface Props {
    post : Post
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    border: solid thin black;
    width: 100%;
    margin-bottom: 10px;
    background-color: black;
    color: white;
`
const ImageArea = styled.section`
    width: 100%;
    height: 585px;
    background-color: white; 
`
const ControlsArea = styled.section`
    width: 100%;
    /* background-color: lightblue; */
`

export default function PostView({post}: Props): ReactElement {

    const { id, userId } = post;
    return (
        <Wrapper>
            <ImageArea>
                Image
            </ImageArea>
            <ControlsArea>
                <ControlsPost targetPost={post}/>
                <ControlsLikes postId={id}/>
                <ControlsCaption userId={userId} postId={id} />
            </ControlsArea>
        </Wrapper>
    )
}
