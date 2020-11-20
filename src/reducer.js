const getLocaluser = () => {
  let user = localStorage.getItem("user");
  if (!user) return null;
  return JSON.parse(user);
};
export const initialState = {
  user: getLocaluser(),
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      localStorage.setItem("user", JSON.stringify(action.user));
      return {
        ...state,
        user: action.user,
      };

    default:
      return { ...state };
  }
}
export default reducer;

/*
export const initialState = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return { ...state };
  }
}
export default reducer;
*/
