import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../hooks'

import ProfilePhoto, { Types }  from '../../layout/ProfilePhoto'

interface Props {
    postId: number
}

const Wrapper=styled.section`
    height: 40px;
    /* background-color: lightgreen; */
    display: flex;
`
const UserPhoto=styled.section`
    /* background-color: lightpink; */
    display: flex;
    justify-content: center;
    align-items: center;
`
const Info=styled.section`
    /* background-color: lightgray; */
    padding-left: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
`
export default function ControlsLikes({ postId }: Props): ReactElement {

    const  [ targetPost ] = useAppSelector(state => state.posts.posts?.filter(post => post.id === postId))
   
    const likes = targetPost.likes;

    const likesText = () => {
        if(likes && likes.length !== 0){
            return `Liked by ${likes[0].username} and ${likes.length} others`
        }else{
            return 'No likes yet.'
        }
    }
    
    return (
        <Wrapper>
            <UserPhoto>
                <ProfilePhoto type={Types.small} userId={2} /> 
            </UserPhoto>
            <Info>
                {likesText()}
            </Info>
        </Wrapper>
    )
}
