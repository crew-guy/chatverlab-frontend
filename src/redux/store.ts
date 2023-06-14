import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// Importing reducers
import state from '@features/stateSlice'
const persistConfig = {
  key: 'root',
  storage,
}


const persisted = persistReducer(persistConfig, state)

export const store = configureStore({
  reducer: persisted,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
