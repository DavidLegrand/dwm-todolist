import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TodosComponent = () => {

  const [todos, setPosts] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      setPosts(await response.json())
    }
    fetchData()
  }, [])

  return <>
    <h1>List of all Todos</h1>
    <ul>
      {todos && todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  </>;
};

TodosComponent.propTypes = {
  //
};

export default TodosComponent;
