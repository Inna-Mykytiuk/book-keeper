// // store.js
//варіант 1-----------------------------

// import { createStore } from 'redux';
// import rootReducer from './reducer';

// const store = createStore(rootReducer);

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import { tasksReducer } from "./tasksSlice";
// import { filtersReducer } from "./filterSlice";

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     filters: filtersReducer,
//   },
// });


//варіант 2 за слайсами-----------------------------

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filterSlice';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['query', 'tasks'],
};

const persistTasksReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistTasksReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

