import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import User from '../../../features/users/user'
import ProfilePhoto, { Types } from '../ProfilePhoto'

interface Props {
    user: User;
}

const Wrapper = styled.section`
    height: 73px;
    display: flex;
    align-items: center;
    margin-left: 10px;
`
const PhotoInfo = styled.section`
    display: flex;
`
const Info = styled.section`
    display: flex;
    flex-direction: column;
    margin-left: 5px;
`
const UserName = styled.span`
    font-weight: 700;
    font-size: 1.25rem;
`
const Controls = styled.section`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    margin-right: 10px;
`


export default function UserBannerLower({ user }: Props): ReactElement {
    return (
        <Wrapper>
            <PhotoInfo>
                <ProfilePhoto 
                    userId={user.id}
                    type={Types.large} 
                />
                <Info>
                    <UserName>{user.username.toLocaleLowerCase()}</UserName>
                    <span>{user.address.city}</span>
                </Info>
            </PhotoInfo>
            <Controls>
                <FontAwesomeIcon icon={faEllipsisH} size={'2x'}/>
            </Controls>
        </Wrapper>
    )
}