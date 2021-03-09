import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import User from './user'

//TODO - [√] Add `Reusable Selector Function` for targetUser 

const users : User[] = [ // TODO: [] get from API
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