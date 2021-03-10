//! postsSlice - Global State for `post` objects
//TODO: [√] Define `post` interface
//TODO: [√] Define 'dummy' initial posts for passing and rendering
//TODO: [√] Refactor to get posts from API

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Post } from './Post'
import { RootState } from '../../app/store'
import axios from 'axios'

const postsUrl = 'http://jsonplaceholder.typicode.com/posts'

let posts: Post[] | undefined;

let dummyPosts: Post[] | undefined = [ 
    {
        userId: 1,
        id: 1,
        title: "My first post!",
        body: "Post #1!!"
      },
      {
          userId: 1,
          id: 2,
          title: 'This is my second post.',
          body: `Wow! I can't believe this is my second post!`
      },
      {
          userId: 2,
          id: 3,
          title: "Another first post post!",
          body: "This is my first post!"
      }
]

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
    reducers:{},
    extraReducers:{
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
        }
    }
})

export default postsSlice.reducer

//* Reusable Selector Functions
export const selectAllPosts = (state: RootState) => state.posts.posts