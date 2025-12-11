import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

function configureReduxStore(): EnhancedStore {
  const store = configureStore({
    reducer: {
    },
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware().concat([]),
  });

  return store;
}

export type RootState = ReturnType<ReturnType<typeof configureReduxStore>['getState']>;
export type AppDispatch = ReturnType<typeof configureReduxStore>['dispatch'];

export default configureReduxStore;
