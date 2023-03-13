import {createApi, fetchBaseQuery,} from '@reduxjs/toolkit/query/react';
import { Todo } from '../models/todo.model';

export const api = createApi({
    reducerPath:'todosApi',
    baseQuery:fetchBaseQuery({baseUrl:`https://jsonplaceholder.typicode.com/`}),
    endpoints:(builder)=>({
        todos:builder.query<Todo[],void>({
            query:()=>`/todos`
        }),
        todo:builder.query({
            query:(id)=>`/todos/${id}`
        })
    })
});
console.log(api)

export const {useTodosQuery,useTodoQuery} = api;