//! <App>
//TODO: [√] Refactor `targetUser` view from inline to <UserPosts> 
//* <UserPosts> should get `targetUser` & targetUsers' `posts` from global state

import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { useAppSelector, useAppDispatch } from './app/hooks'
import { targetUserSet, selectTargetUser, selectAllUsers } from './features/users/userSlice'

import Banner from './app/layout/Banner'


import ProfilePhoto, { Types } from './app/layout/ProfilePhoto'
import UserBanner from './app/layout/userbanner/UserBanner'
import UserPosts from './features/users/UserPosts'

const AppWrapper = styled.div`
  //* iPhone 11 Max Aspect Ratio
  height: 896px;
  width: 414px;
  background: black;
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

  //* Typed Hooks
  const users = useAppSelector(selectAllUsers); //* Typeof User[] is inferred by TS
  const targetUser = useAppSelector(selectTargetUser);
  const dispatch = useAppDispatch();
  
  /*
    * Tried to do the @acemarke render below, but it was throwing a `no functions` as react 
    * component errors. 
    TODO: [] Refactor to @acemark style render
  */
  // let usersList;
  // if(users){
  //   usersList = users.map(user => (
  //     <UserText
  //       role="button" 
  //       key={user.id}
  //       onClick={() => dispatch(targetUserSet(user))}
  //     >{user.name}</UserText>
  //   ))
  // }else{
  //   usersList = () => (<p>Loading</p>)
  // }

  if(!targetUser){
    return (
      <AppWrapper>
          <SelectUser>
            <Banner fontSize={'5rem'}/>
            <h2>Please select a user:</h2>
            {/* {usersList} */} 
            {(users ? users.map(user => (
              <>
                <ProfilePhoto userId={user.id} type={ Types.small }/>
                <UserText 
                  role="button"
                  key={user.id}
                  onClick={() => dispatch(targetUserSet(user))}
                >{user.name}</UserText>
              </>
            )): <p>Loading</p>)}
          </SelectUser>
      </AppWrapper>
    )
  }else{
    return(
      <AppWrapper>
        <UserBanner>
          <UserPosts />
        </UserBanner>
      </AppWrapper>
    )
  }
  
}


