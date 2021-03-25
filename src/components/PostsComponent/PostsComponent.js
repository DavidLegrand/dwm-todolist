import React, { useState, useEffect } from "react";
const PostsComponent = () => {

  const [posts, setPosts] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      setPosts(await response.json())
    }
    fetchData()
  }, [])

  return <>
    <h1>List of all posts</h1>
    <ul>
      {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}
    </ul>
  </>;
};

export default PostsComponent;
