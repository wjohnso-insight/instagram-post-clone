import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { useAppSelector, useAppDispatch } from './app/hooks'
import { RootState } from './app/store'

import { targetUserSet, selectTargetUser } from './features/users/userSlice'

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
const UserText = styled.button`
  margin: 10px;
  font-size: 1.25rem;
  font-weight: 700;
  &:hover{
    cursor: pointer;
  }
`

export default function App(): ReactElement {
  // const [ targetUser, setTargetUser ] = useState<String | undefined>();

  //* Typed Hooks
  const users = useAppSelector((state: RootState) => state.users); //* Typeof User[] is inferred by TS
  const targetUser = useAppSelector(selectTargetUser);
  const dispatch = useAppDispatch();

  const usersList = users.users.map(user => (
    <UserText 
      key={user.id}
      // onClick={() => setTargetUser(user.userName)}
      onClick={() => dispatch(targetUserSet(user))}
      >{user.userName}</UserText>
  ))
  
  if(!targetUser){
    return (
      <AppWrapper>
          <SelectUser>
            <h1>Please select a user:</h1>
            {usersList}
          </SelectUser>
      </AppWrapper>
    )
  }else{
    return(
      <AppWrapper>
        {targetUser.userName}
        <button onClick={() => dispatch(targetUserSet(undefined))}>Back</button>
      </AppWrapper>
    )
  }
  
}


