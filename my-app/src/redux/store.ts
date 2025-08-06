import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice'
import tasksReducer from './features/task/taskSlice'
import logger, { blockCertainAction } from "@/middlewares/logger";
import userReducer from './features/user/userSlice'
import { baseApi } from "./api/baseApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: tasksReducer,
        client: userReducer,
        [baseApi.reducerPath] : baseApi.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, blockCertainAction),
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch