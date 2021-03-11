import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Post } from './Post'

import UserBanner from '../../app/layout/userbanner/UserBanner'

//TODO: [√] Render `post` 

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
    height: 200px;
    background-color: lightblue;
`

export default function PostView({post}: Props): ReactElement {
    return (
        <Wrapper>
            <ImageArea>
                Image
            </ImageArea>
            <ControlsArea>
                Controls
            </ControlsArea>
        </Wrapper>
    )
}
