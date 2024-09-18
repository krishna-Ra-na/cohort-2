import { useEffect, useState } from "react";
import axios from "axios";

export function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  //   function getData() {
  //     axios.get("https://dummyjson.com/todos").then((res) => {
  //       setTodos(res.data.todos);
  //       setLoading(false);
  //     });
  //   }

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://dummyjson.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);

    axios.get("https://dummyjson.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });

    return () => {
      clearInterval(value);
    };
  }, [n]);

  return {
    todos,
    loading,
  };
}
