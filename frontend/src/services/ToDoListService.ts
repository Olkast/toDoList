import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ITodo} from "../models/ITodo";



export const ToDoListAPI = createApi({
    reducerPath: 'ToDoListAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7761'}),
    tagTypes: ['ToDo'],
    endpoints: (build) => ({
        fetchAllList: build.query<ITodo[], undefined>({
            query: () => ({
                url: `/list`,
            }),
            providesTags: result => ['ToDo']
        }),
        createToDo: build.mutation<ITodo[], string>({
            query: (text) => ({
                url: `/list`,
                method: 'POST',
                body: {text: text},
            }),
            invalidatesTags: ['ToDo']
        }),
        deleteToDo: build.mutation<ITodo[], string>({
            query: (id) => ({
                url: `/list/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['ToDo']
        }),
        updateTextToDo: build.mutation<ITodo[], {id: string;
            text: string}>({
            query: ({id, text}) => ({
                url: `/list/${id}`,
                method: 'PUT',
                body: {text: text},
            }),
            invalidatesTags: ['ToDo']
        }),
        updateIsDoneToDo: build.mutation<ITodo[], {id: string;
            isDone: boolean}>({
            query: ({id, isDone}) => ({
                url: `/list/done/${id}`,
                method: 'PUT',
                body: {isDone: isDone},
            }),
            invalidatesTags: ['ToDo']
        }),

    })
})