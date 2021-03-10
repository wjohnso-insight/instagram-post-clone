import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Post } from './Post'

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
const Content = styled.section`
    padding: 10px;
`
const Title = styled.h3``

const Body = styled.span``

export default function PostView({post}: Props): ReactElement {
    return (
        <Wrapper>
            <Content>
                <Title>{post.title}</Title>
                <Body>{post.body}</Body>
            </Content>
        </Wrapper>
    )
}
