import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

 
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api'}),
    endpoints: (build) => ({
        getTasks: build.query({
            query: () => '/tasks'
        }),
        createTask: build.mutation({
            query: (data) => ({
                url: '/tasks',
                method: "POST",
                body: data
            })
        })
    })
})


export const { useGetTasksQuery, useCreateTaskMutation } = baseApi