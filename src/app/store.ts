import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usersReducer from '../features/users/userSlice'
import postsReducer from '../features/posts/postsSlice'
import likesReducer from '../features/likes/likesSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    likes: likesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>; //* Extract `RootState` type
export type AppDispatch = typeof store.dispatch; //* Extract `Dispatch` type

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
