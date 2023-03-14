import React from 'react'
import { useTodoQuery } from '../services/api'

export default function TodoDetails({id}:{id:number}) {
    const {data} = useTodoQuery(id);
    
  return (
    <div>{data?.title}
        <strong>User : {data?.userId}</strong>
    </div>
  )
}
