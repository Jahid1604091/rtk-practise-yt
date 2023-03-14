import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useTodosQuery } from './services/api';
import TodoDetails from './componets/TodoDetails';
import AddTodo from './componets/AddTodo';

function App() {
  const { data, error, isFetching, isLoading, isSuccess } = useTodosQuery();

  return (
    <div className="App">
      <h3>Testing tool</h3>
      {isLoading && <h3>Loading....</h3>}
      {isFetching && <h3>Fetching data....</h3>}
      {error && <h3>Something Wrong....</h3>}
      {
        isSuccess && (
          <>
            {
              data?.map(todo => {
                return <div key={todo.id}>
                  <h4>Title : {todo.title}</h4>
                  <h5> {todo.completed && 'Done'}</h5>
                  <TodoDetails id={todo.id} />
                </div>
              })
            }
          </>
        )
      }
      <h2>Todo Details</h2>
      <h1>Add  a Todo</h1>
      <AddTodo/>
    </div>
  );
}

export default App;
