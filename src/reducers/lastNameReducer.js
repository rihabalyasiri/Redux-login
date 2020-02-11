export default (state = {}, action) => {
  if (action.type === "LAST_NAME") {
    return { lastName: action.payload };
  }
  return state;
};
