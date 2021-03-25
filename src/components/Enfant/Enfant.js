import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Enfant = ({ logName }) => {
  useEffect(() => console.log("Enfant a été re render"))
  return <div>
    Enfant : <button onClick={() => logName()}>Log Name</button>
  </div>;
};

Enfant.propTypes = {
  //
};

export default React.memo(Enfant);
