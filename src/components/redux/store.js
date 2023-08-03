// // store.js
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

import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filterSlice';
import { combineReducers } from 'redux';


const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['query'],
  //Зберігають тільки потрібні дані винесені в блек ліст або вайт ліст
  // blacklist: ['navigation'],
  // whitelist: ['navigation'],
};


const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, devToolsEnhancer());
export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import { tasksReducer } from './tasksSlice';
// import { filtersReducer } from './filterSlice';

// const todosPersistConfig = {
//   key: 'todos',
//   storage,
// };

// const filtersPersistConfig = {
//   key: 'filters',
//   storage,
//   whitelist: ['query'],
// };

// export const store = configureStore({
//   reducer: {
//     tasks: persistReducer(todosPersistConfig, tasksReducer),
//     filters: persistReducer(filtersPersistConfig, filtersReducer),

//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
