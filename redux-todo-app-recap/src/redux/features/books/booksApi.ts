



import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080"
    }),
    endpoints: (build) => ({
        getAllBooks: build.query({
            query: () => '/api/books'
        }),
    }),
})

export const { useGetAllBooksQuery } = booksApi