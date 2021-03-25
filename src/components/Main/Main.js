import React, { useContext } from "react";
import Theme from 'context/Theme'

const Main = ({ children }) => {
  const { theme } = useContext(Theme)
  return <div className={theme}>{children}</div>;
};

export default Main;
