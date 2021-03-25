import React, { useContext } from "react";
import PropTypes from "prop-types";

import Page from 'context/Page'

const Menu = () => {
  const { page, router } = useContext(Page)
  const pages = ["register", "posts", "todos", "users"]
  return <div>
    {pages.map(p =>
      <button
        className={page === p && "active"}
        onClick={() => router(p)}>
        {p}
      </button>
    )}

  </div>;
};

Menu.propTypes = {
  //
};

export default Menu;
