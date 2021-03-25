const increment = (value = 1) => ({ type: "INCREMENT", payload: value })
const decrement = (value = 1) => ({ type: "DECREMENT", payload: value })

const actions = { increment, decrement }
export default actions