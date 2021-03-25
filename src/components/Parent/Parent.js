import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Enfant from "components/Enfant"


const Parent = () => {

  const [name, setName] = useState('John')
  const [age, setAge] = useState(42)

  const logName = useCallback(
    () => { console.log(name) },
    [name]
  )
  useEffect(() => console.log("Parent a été re render"))
  
  return <div>
    Parent
    <button onClick={() => setAge(age => age + 1)}>+1</button>
    <Enfant logName={logName} />
  </div>
};

Parent.propTypes = {
  //
};

export default Parent;
