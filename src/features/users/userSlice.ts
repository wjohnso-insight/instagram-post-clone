import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import User from './user'

//! Next Task - Refactor to get users from API call

const users : User[] = [
    {
        id: 1,
        userName: 'wjohnsto',
    },
    {
        id: 2,
        userName: 'jHypes0336'
    }
]

let targetUser: User | undefined;

const initialState = {
    users,
    targetUser
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        targetUserSet(state,action){
            state.targetUser = action.payload;
        }
    }
})

export const { targetUserSet } = usersSlice.actions

export default usersSlice.reducer

export const selectTargetUser = (state: RootState) => state.users.targetUser //* Reusable Selector Function