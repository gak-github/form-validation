export default (state, action) => {
  switch (action.type) {
    case "CREATE_ACCOUNT":
      return {
        ...state,
        loading: true,
        account: action.payload
      }
    default:
      return state
  }
};
