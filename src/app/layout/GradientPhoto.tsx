import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { useAppSelector } from '../hooks'

import ProfilePhoto, { Types } from './ProfilePhoto'

interface Props {
    userId: number
}

const Wrapper=styled.section`
    /* background-color: lightpink; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Photo=styled.section`
    height: 60px;
    width: 60px;
    clip-path: circle(50% at 50% 50%);
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(145.57deg, #7B61FF 7.32%, rgba(168, 64, 225, 0.960417) 45.79%, rgba(214, 29, 195, 0.92) 79.41%);
`
const UserName=styled.span`
    /* background-color: lightgreen; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 10px;
`

// eslint-disable-next-line no-empty-pattern
export default function GradientPhoto({ userId }: Props): ReactElement {

    const user = useAppSelector(state => state.users.users.find(user => user.id === userId));
  
    return (
        <Wrapper>
            <Photo>
                <ProfilePhoto userId={userId} type={Types.large}/>
            </Photo>
            <UserName>@{user?.username.toLocaleLowerCase()}</UserName>
        </Wrapper>
    )
}
