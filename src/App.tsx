import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { useAppSelector, useAppDispatch } from './app/hooks'
import { targetUserSet, selectTargetUser, selectAllUsers } from './features/users/userSlice'

const AppWrapper = styled.div`
  //* iPhone 11 Max Aspect Ratio
  height: 896px;
  width: 414px;
  background-color: lightpink;
`
const SelectUser = styled.div`
  min-height: 100%;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const UserText = styled.span`
  margin: 10px;
  font-size: 1.25rem;
  font-weight: 700;
  border: solid thin black;
  padding: 10px;
  &:hover{
    cursor: pointer;
  }
`

export default function App(): ReactElement {
  //* REMEBER => onClick={() => dispatch(targetUserSet(user))} 

  //* Typed Hooks
  const users = useAppSelector(selectAllUsers); //* Typeof User[] is inferred by TS
  const targetUser = useAppSelector(selectTargetUser);
  const dispatch = useAppDispatch();
  let usersList;

  if(users){
    usersList = users.map(user => (
      <UserText
        role="button" 
        key={user.id}
        onClick={() => dispatch(targetUserSet(user))}
      >{user.name}</UserText>
    ))
  }else{
    usersList = () => <p>Loading</p>
  }

  if(!targetUser){
    return (
      <AppWrapper>
          <SelectUser>
            <h2>Please select a user:</h2>
            {usersList}
          </SelectUser>
      </AppWrapper>
    )
  }else{
    return(
      <AppWrapper>
        {targetUser.name}
        <button onClick={() => dispatch(targetUserSet(undefined))}>Back</button>
      </AppWrapper>
    )
  }
  
}


