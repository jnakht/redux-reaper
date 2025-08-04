import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice'
import tasksReducer from './features/task/taskSlice'
import logger, { blockCertainAction } from "@/middlewares/logger";
import userReducer from './features/user/userSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: tasksReducer,
        client: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, blockCertainAction),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch