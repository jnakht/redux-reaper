import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './features/tasks/taskSlice'
import { booksApi } from './features/books/booksApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        [booksApi.reducerPath]: booksApi.reducer,
    },
      middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(booksApi.middleware),
})
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch