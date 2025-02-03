import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';

import {
  // persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// import authReducer from './auth/auth-slice';
// import { bloodDietReducer } from './bloodDiet/slice';
// import productsReducer from './products/products-slice';
// import { diaryReducer } from './diary/diarySlice';
import { catsReducer } from './cats/slice';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
// };

export const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig, authReducer),
    cats: catsReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
