import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";
import authAPI from "./queries/auth/authQuery";

const store = configureStore({
    reducer:{
        [authSlice.name]: authSlice.reducer,
        [authAPI.reducerPath]: authAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat([
          authAPI.middleware
        ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;