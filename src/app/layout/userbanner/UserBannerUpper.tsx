import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { targetUserSet } from '../../../features/users/userSlice'
import { useAppDispatch } from '../../hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

interface Props {
    userName: string
}

const Wrapper = styled.section`
    height: 37px;
    display: flex;
`
const Icon = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    :hover{
        cursor: pointer;
    }
`

const UserInfo = styled.section`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const NameText = styled.span`
    font-weight: 700;
`
export default function UserBannerUpper({ userName }: Props): ReactElement {
    
    const displayUserName: string = userName.toLocaleUpperCase();
    const dispatch = useAppDispatch();

    return (
        <Wrapper>
            <Icon>
                <FontAwesomeIcon 
                    icon={faChevronLeft} 
                    size={'2x'} 
                    role="button"
                    onClick={() => dispatch(targetUserSet(undefined))}
                />
            </Icon>
            <UserInfo>
                <NameText>{displayUserName}</NameText>
                <span style={{
                    "fontWeight": 700,
                    "fontSize": "1.25rem"
                }}>Posts</span>

            </UserInfo>
        </Wrapper>
    )
}
