import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import suspenseReducer from "./slice/suspenseSlice";

import logger from "redux-logger";
import authReducer from "./slice/authSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { api } from "./services/api";
import localStorage from "redux-persist/es/storage";
import { rtkQueryErrorLogger } from "../middleware/rtkQueryErrorLogger";

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  suspence: suspenseReducer,
});

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([api.middleware, rtkQueryErrorLogger, logger]),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
