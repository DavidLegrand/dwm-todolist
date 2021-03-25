import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const UsersComponent = () => {

  const [users, setPosts] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      setPosts(await response.json())
    }
    fetchData()
  }, [])

  return <>
    <h1>List of all Users</h1>
    <ul>
      {users && users.map((user) => <li key={user.id}>{user.name} - {user.username}</li>)}
    </ul>
  </>;
};

UsersComponent.propTypes = {
  //
};

export default UsersComponent;
