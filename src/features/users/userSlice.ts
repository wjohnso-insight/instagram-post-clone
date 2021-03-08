import { createSlice } from '@reduxjs/toolkit'
import User from './user'

/** 
    * TODO: 
        *[] Return an array of users   
 */

const initialState : User[] = [ // TODO: [] get from API
    {
        id: 1,
        userName: 'wjohnsto'
    },
    {
        id: 2,
        userName: 'jHypes0336'
    }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer