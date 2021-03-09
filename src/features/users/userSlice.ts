import { createSlice } from '@reduxjs/toolkit'
import User from './user'

//TODO - [] Refactor initial state to handle User[] as a field
//TODO - [] Add 'targetUser' field to initial state
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

let targetUser: any;

const initialState = {
    users,
    targetUser
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        targetUserSelected(state,action){
            const { userId } = action.payload //* passed in at component level; component level state object
            state.targetUser = state.users.find(user => user.id === userId)
        }
    }
})

export default usersSlice.reducer