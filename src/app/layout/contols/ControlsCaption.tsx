import React, { ReactElement, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Post } from '../../../features/posts/Post';

import { useAppSelector } from '../../hooks'

interface Props {
    userId: number,
    postId: number
}

const Wrapper=styled.section`
    /* background-color: lightpink; */
    height: 100%;
    padding: 10px;
`
const UserName=styled.span`
    font-weight: 700;
    font-size: 1.05rem;
    margin-right: 5px;
`
const MoreText = styled.span<{ visibility: string}>`
    font-weight: 700;
    visibility: ${(props) => props.visibility};
    margin-left: 5px;
    color: #606060;
    font-size: 1.1rem;
    &:hover{
        cursor: pointer;
    }
`

export default function ControlsCaption({userId, postId}: Props): ReactElement {
    
    const targetPost  = useAppSelector(state => state.posts.posts?.filter(post => post.id === postId));
    const user = useAppSelector(state => state.users.users?.filter(user => user.id === userId));

    const initialCharLimit = 10;
    const [ charLimit, setCharLimit ] = useState(initialCharLimit);


    if(targetPost && user){
        const isOverCharLimit = () => {
            if(targetPost[0].body.length > charLimit){
                return true
            }else{
                return false
            }
        }

        return (
            <Wrapper>
               <UserName>{user[0].username.toLowerCase()}</UserName>
               {targetPost[0].body.substring(0,charLimit)}
               <MoreText 
                visibility={(isOverCharLimit() ? "visible" : "hidden")}
                onClick={() => setCharLimit(targetPost[0].body.length)}
                >... more</MoreText> 
            </Wrapper>
        )
    }else{
        return(
            <span>Post not found...</span>
        )
    }
    
}
