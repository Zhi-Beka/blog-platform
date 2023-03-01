import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice';
import authReducer from './slices/AuthSlice';
import postReducer from './slices/PostSlice';

const rootReducer = combineReducers({ userReducer, authReducer, postReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
