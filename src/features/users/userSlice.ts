import { createSlice } from '@reduxjs/toolkit'
import User from './user'

//TODO - [√] Refactor initial state to handle User[] as a field
//TODO - [√] Add 'targetUser' field to initial state
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