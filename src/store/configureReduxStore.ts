import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import appReducer from './modules/appReducer';

function configureReduxStore(): EnhancedStore {
  const store = configureStore({
    reducer: {
      app: appReducer,
    },
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware().concat([]),
  });

  return store;
}

export type RootState = ReturnType<ReturnType<typeof configureReduxStore>['getState']>;
export type AppDispatch = ReturnType<typeof configureReduxStore>['dispatch'];

export default configureReduxStore;
