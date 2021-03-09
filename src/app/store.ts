import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usersReducer from '../features/users/userSlice'
import postsReducer from '../features/posts/postsSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer
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
