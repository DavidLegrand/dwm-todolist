const initialState = {
  counter: 0,
  user: null,
  logged: false,
  theme: "dark",
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.payload }
    case "DECREMENT":
      return { ...state, counter: state.counter - action.payload }
    default:
      return state
  }
}

export default reducer