import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchReducer from '../components/searchBox/searchSlice';
import kittyReducer from '../containers/home/kittySlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    kitty: kittyReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
