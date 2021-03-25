import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux'
import actions from 'store/actions'

const Counter = () => {
  const counter = useSelector(state => state.counter)
  // const dispatch = useDispatch()

  return <>
    Compteur : {counter}
    {/* <button onClick={() => dispatch(actions.increment())}>+1</button>
    <button onClick={() => dispatch(actions.decrement())}>-1</button> */}
  </>
};

Counter.propTypes = {
  //
};

export default Counter;
