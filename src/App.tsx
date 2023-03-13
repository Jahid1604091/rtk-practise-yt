import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useTodosQuery } from './services/api';

function App() {
  const {data,error,isFetching,isLoading,isSuccess} = useTodosQuery();
  console.log(data)
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
            data?.map(todo=>{
              return <div key={todo.id}>
                <h4>Title : {todo.title}</h4>
                <h5> {todo.completed && 'Done'}</h5>
              </div>
            })
          }
          </>
        )
      }
    </div>
  );
}

export default App;
