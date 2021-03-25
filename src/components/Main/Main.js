import React, { useContext } from "react";
import Theme from 'context/Theme'
import Page from 'context/Page'
import Form from "components/Form";
import PostsComponent from "components/PostsComponent";
import UsersComponent from "components/UsersComponent";
import TodosComponent from "components/TodosComponent";

const Main = ({ children }) => {
  const { theme } = useContext(Theme)
  const { page } = useContext(Page)
  return <div className={theme}>
    {children}
    {page === "posts" && <PostsComponent />}
    {page === "users" && <UsersComponent />}
    {page === "todos" && <TodosComponent />}
    {page === "register" && <Form />}
  </div>;
};

export default Main;
