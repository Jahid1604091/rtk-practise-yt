import {createApi, fetchBaseQuery,} from '@reduxjs/toolkit/query/react';
import { Todo } from '../models/todo.model';

export const api = createApi({
    reducerPath:'todosApi',
    tagTypes:['Todo'],
    baseQuery:fetchBaseQuery({baseUrl:`https://jsonplaceholder.typicode.com/`}),
    endpoints:(builder)=>({
        todos:builder.query<Todo[],void>({
            query:()=>`/todos`,
            providesTags:['Todo']
        }),
        todo:builder.query({
            query:(id)=>`/todos/${id}`,
            providesTags:['Todo']
        }),
        addTodo:builder.mutation<void,Todo>({
            query:todo=>({
                url:'/todos',
                method:'POST',
                body:todo
            }),
            invalidatesTags:['Todo']
        }),
        updateTodo:builder.mutation<void,Todo>({
            query:({id,...rest})=>({
                url:`/todos/${id}`,
                method:'PUT',
                body:rest
            }),
            invalidatesTags:['Todo']
        }),
        deleteTodo:builder.mutation<void,number>({
            query:(id)=>({
                url:`/todos/${id}`,
                method:'DELETE',
            }),
            invalidatesTags:['Todo']
        }),
    })
});
console.log(api)

export const {
    useTodosQuery,
    useTodoQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation
} = api;