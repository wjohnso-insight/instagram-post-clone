import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

import { selectAllPosts } from '../posts/postsSlice'
import { selectTargetUser, targetUserSet } from './userSlice'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100%;
`
export default function UserPosts(): ReactElement {

    const posts = useAppSelector(selectAllPosts);
    const targetUser = useAppSelector(selectTargetUser)
    const dispatch = useAppDispatch();

    console.log(posts.filter(post => post.userId === targetUser?.id));

    if(targetUser){
        return (
            <Wrapper>
                {targetUser.name}
                <button
                    onClick={() => dispatch(targetUserSet(undefined))}
                >Back</button>
            </Wrapper>
        )
    }else{
        return(
            <Wrapper>
                <h1>User Not Found</h1>
                <button
                    onClick={() => dispatch(targetUserSet(undefined))}
                >Back</button>
            </Wrapper>
        )
    }

}
