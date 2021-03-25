import React, { useState, useEffect } from "react";
import ThemeSwitcher from "components/ThemeSwitcher";

const TestComponent = () => {
  const initialState = {
    firstName: "David",
    lastName: "Legrand",
    age: 32
  }

  const [user, setuser] = useState(initialState)
  const [posts, setPosts] = useState(null)

  useEffect(() => console.log("Effect : A chaque render de mon composant"))
  useEffect(() => console.log("Effect : A chaque modification de user"), [user])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      setPosts(await response.json())
    }
    fetchData()
  }, [])

  const handleClick = () => setuser((previousUser) => ({ ...previousUser, age: previousUser.age + 1 }))
  
  return <>
    <h1>User {user.firstName} {user.lastName}, is {user.age} </h1>
    <button onClick={handleClick}>Happy Birthday !</button>
    <ThemeSwitcher />
    <ul>
      {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}
    </ul>
  </>;
};

export default TestComponent;
