import { useEffect, useState } from "react";
import axios from "axios";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, loading } = useTodos(10);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {todos.map((todo) => (
        <Track todo={todo} key={todo.id} />
      ))}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.id}
      :-
      {todo.todo} <br />
      userid:-
      {todo.userId}
      <br />
    </div>
  );
}

export default App;
