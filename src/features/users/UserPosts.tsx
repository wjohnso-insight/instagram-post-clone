import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

import { selectAllPosts } from '../posts/postsSlice'
import { selectTargetUser, targetUserSet } from './userSlice'

import  PostView from '../posts/PostView'

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

    //TODO: [√] Map over userPosts and return a <PostView post={post} /> component
    //TODO: [] Refactor to @acemarke style render
    const userPosts = posts?.filter(post => post.userId === targetUser?.id);

    if(targetUser){
        return (
            <Wrapper>
                {targetUser.name}
                {(userPosts && userPosts.length > 0 ? userPosts.map(post => 
                    <PostView post={post} />): <span>This user has no posts.</span>)}
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
