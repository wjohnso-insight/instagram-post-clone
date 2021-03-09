import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import axios from 'axios'
import User from './user'

//! Next Task - Refactor to get users from API call
//TODO: [√] Update `User` interface to reflect API user response
//TODO: [√] Create `createAsyncThunk('users/fetchUsers') that fetches users from `usersUrl` endpoint
//TODO: [√] Handle `fetchUsers.fulfilled` action type and pass payload to `state.users.users`

const usersUrl = 'https://jsonplaceholder.typicode.com/users'

let targetUser: User | undefined;
let users: User[] | undefined;

const initialState = {
    users,
    targetUser
}

export const fetchUsers : any = createAsyncThunk('users/fetchUsers', async () =>{
    const response = await axios.get(usersUrl)
    return response.data
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        targetUserSet(state,action){
            state.targetUser = action.payload;
        }
    },
    extraReducers:{
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload
        }
    }
})

export const { targetUserSet } = usersSlice.actions

export default usersSlice.reducer

//* Reusable Selector Function
export const selectTargetUser = (state: RootState) => state.users.targetUser 
export const selectAllUsers = (state: RootState) => state.users.users