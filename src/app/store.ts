import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usersReducer from '../features/users/userSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer
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
