import React, { ReactElement } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'

import { selectAllPosts } from '../posts/postsSlice'
import { selectTargetUser, targetUserSet } from './userSlice'

import  PostView from '../posts/PostView'

export default function UserPosts(): ReactElement {
    const posts = useAppSelector(selectAllPosts);
    const targetUser = useAppSelector(selectTargetUser)
    const dispatch = useAppDispatch();

    //TODO: [√] Map over userPosts and return a <PostView post={post} /> component
    //TODO: [] Refactor to @acemarke style render
    const userPosts = posts?.filter(post => post.userId === targetUser?.id);

    if(targetUser){
        return (
                <div>
                {(userPosts && userPosts.length > 0 ? userPosts.map(post => 
                    <PostView key={post.id} post={post} />): <span>This user has no posts.</span>)} 
                </div>
        )
    }else{
        return(
            <>
                <h1>User Not Found</h1>
                <button
                    onClick={() => dispatch(targetUserSet(undefined))}
                >Back</button>
            </>
        )
    }

}
