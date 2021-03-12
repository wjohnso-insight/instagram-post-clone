import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { selectTargetUser } from '../../../features/users/userSlice'
import { likeAdded, likeRemoved } from '../../../features/posts/postsSlice'
import { Post } from '../../../features/posts/Post'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-solid-svg-icons'

interface Props {
   targetPost: Post
}

const Wrapper=styled.section`
    height: 40px;
    display: flex;
    align-items: center;
    /* background-color: lightpink; */
`
const Icons=styled.section`
    /* background-color: lightgreen; */
    height: 100%;
    margin-left: 10px;
    display: flex;
    align-items: center;
`
const Bookmark=styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    margin-right: 10px;
    flex-grow: 1;
    /* background-color: lightpink; */
`
const Icon=styled.span`
    margin-right: 5px;
`

export default function ControlsPost({ targetPost }: Props): ReactElement {

    const targetUser = useAppSelector(selectTargetUser);
    
    const didLike = useAppSelector(state =>{
        if(targetUser){
           return state.posts.posts
            .filter(post => post.id === targetPost.id)[0].likes.includes(targetUser)
        }
    })

    const dispatch = useAppDispatch();
    
    const handleLike = () => {
        if(targetUser && !didLike){
          dispatch(likeAdded(targetUser,targetPost))
        }else if(targetUser && didLike){
          dispatch(likeRemoved(targetUser,targetPost))
        }
    }

    return (
        <Wrapper>
            <Icons>
                <Icon onClick={() => handleLike()}>
                    <FontAwesomeIcon 
                        icon={faHeart} 
                        size={'2x'} 
                        color={(didLike ? "red" : "white")}/>
                </Icon>
                <Icon>
                    <FontAwesomeIcon icon={faComment} size={'2x'} />
                </Icon>
                <Icon>
                    <FontAwesomeIcon icon={faPaperPlane} size={'2x'} />
                </Icon>
            </Icons>
            <Bookmark>
                <FontAwesomeIcon icon={faBookmark} size={'2x'} />
            </Bookmark>
        </Wrapper>
    )
}
