
import { configureStore } from "@reduxjs/toolkit"
import taskReducer from './features/task/taskSlice'
import userReducer from './features/user/userSlice'

export const store = configureStore({
    reducer: {
        todo: taskReducer,
        client: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;