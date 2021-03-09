import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'

import { useSelector }  from 'react-redux'
import { RootState } from './app/store'
import User from './features/users/user'


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
  const [ targetUser, setTargetUser ] = useState<String | undefined>();
  const users : User[]  = useSelector((state: RootState) => state.users)

  const usersList = users.map(user => (
    <UserText 
      key={user.id}
      onClick={() => setTargetUser(user.userName)}
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
        {targetUser}
        <button onClick={() => setTargetUser(undefined)}>Back</button>
      </AppWrapper>
    )
  }
  
}
