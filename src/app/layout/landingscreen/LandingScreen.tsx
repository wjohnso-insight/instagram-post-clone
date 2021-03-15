import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'

import { useAppSelector, useAppDispatch } from '../../hooks'
import { selectAllUsers, targetUserSet } from '../../../features/users/userSlice'

import GradientPhoto from '../GradientPhoto'

interface Props {}

const Wrapper=styled.section`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Users=styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

const UsersChild=styled.div`
    margin: 25px;
    flex: 1;
    &:hover{
        cursor: pointer;
    }
`

// eslint-disable-next-line no-empty-pattern
export default function LandingScreen({}: Props): ReactElement {

    const users = useAppSelector(selectAllUsers);
    const dispatch = useAppDispatch();
    return (
        <Wrapper>
            <h3>Select a User</h3>
            <Users>
                {users.map(user => {
                return (
                    <UsersChild
                        key={user.id} 
                        onClick={() => dispatch(targetUserSet(user))}
                        role="button"
                    >
                        <GradientPhoto key={user.id} userId={user.id} />
                    </UsersChild>
                    )
                })} 
            </Users>
        </Wrapper>
    )
}
