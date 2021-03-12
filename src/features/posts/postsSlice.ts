//! postsSlice - Global State for `post` objects
//TODO: [√] Define `post` interface
//TODO: [√] Define 'dummy' initial posts for passing and rendering
//TODO: [√] Refactor to get posts from API
//TODO: [√] Add 'likes' field to each `post` object before initializing state after API call
//TODO: [] Define `posts/likeAdded` reducer
//TODO: [] Persist state with local storage 

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Post } from './Post'
import User from '../users/user'
import { RootState } from '../../app/store'
import axios from 'axios'

const postsUrl = 'http://jsonplaceholder.typicode.com/posts'

let posts: Post[] = [];

export const fetchPosts : any = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(postsUrl)
    return response.data
})

const initialState = {
    posts,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        likeAdded:{
            reducer: (state,action: PayloadAction<any>) =>{
                const { targetUser, targetPost:{id} } = action.payload;
                const [ updatePost ] = state.posts.filter(post => post.id === id);
                updatePost.likes.push(targetUser)
            },
            prepare: (targetUser : User,targetPost: Post) => {
               return { payload: { targetUser,targetPost } }
            }
        },
        likeRemoved:{
            reducer: (state, action: PayloadAction<any>) =>{
                const { targetUser, targetPost:{id} } = action.payload;
                const [ updatePost ] = state.posts.filter(post => post.id === id);
                const targetLikeIndex = updatePost.likes.findIndex(like => like.username === targetUser.username)
                updatePost.likes.splice(targetLikeIndex,1)
            },
            prepare: (targetUser: User,targetPost: Post) => {
                return { payload: { targetUser, targetPost } }
            }
        }
    },
    extraReducers:{
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts = action.payload.map((post: { likes: User[] })  => ({...post, likes: []}))
        }
    }
})

export const { likeAdded, likeRemoved } = postsSlice.actions

export default postsSlice.reducer

//* Reusable Selector Functions
export const selectAllPosts = (state: RootState) => state.posts.posts