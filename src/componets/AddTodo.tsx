import React from 'react'
import { useAddTodoMutation, useTodosQuery } from '../services/api'

export default function AddTodo() {
    const [addTodo] = useAddTodoMutation();
    // const {refetch} = useTodosQuery()
    const todo = {
        userId: "001",
        id: 1,
        title: "Testing",
        completed: false
    }

    const addHandler = async () => {
        await addTodo({
            userId: "001",
            id: 1,
            title: "Testing",
            completed: false
        })

        // refetch()
        //instead of refetch can use tagTypes for auto fetching
        
    }
    return (
        <div>
            <button onClick={addHandler}>Add now</button>
        </div>
    )
}
