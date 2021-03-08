import React, { ReactElement } from 'react'
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

export default function App(): ReactElement {

  const users : User[]  = useSelector((state: RootState) => state.users)

  const usersList = users.map(user => (
    <p key={user.id}>{user.userName}</p>
  ))

  return (
    <AppWrapper>
      {usersList}
    </AppWrapper>
  )
}
