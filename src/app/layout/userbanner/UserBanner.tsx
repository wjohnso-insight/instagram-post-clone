import React, { ReactElement } from 'react'
import styled from 'styled-components'

import {  useAppSelector } from '../../hooks'
import { selectTargetUser } from '../../../features/users/userSlice'

import UserBannerUpper from './UserBannerUpper'
import UserBannerLower from './UserBannerLower'

interface Props{
    children?: any
}
const Wrapper = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
`
const Banner = styled.section`
    width: 100%;
    background-color: black;
`
const Posts = styled.section`
    overflow: scroll;
`


export default function UserBanner({ children } : Props): ReactElement {

    const targetUser = useAppSelector(selectTargetUser)

    if(targetUser){
        return (
            <Wrapper>
                <Banner>
                    <UserBannerUpper userName={targetUser!.username} />
                    <UserBannerLower user={targetUser} />
                </Banner>
                <Posts>
                    {children}
                </Posts>
            </Wrapper>
        )
    }else{
        return(
            <span>No user</span>
        )
    }
    
}
