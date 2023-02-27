import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UsersSlice/UserSlice';
import authReducer from './slices/AuthSlice/AuthSlice';

const rootReducer = combineReducers({ userReducer, authReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
