//reducer will update the store
export default (state = {}, action) => {
  if (action.type === "FIRST_NAME") {
    return { firstName: action.payload };
  }
  return state;
};
