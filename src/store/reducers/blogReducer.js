import * as actionTypes from "../actions/actionTypes";

const initialState = {
  blogs: null,
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.FETCH_BLOGS_START:
      return { ...state };

    case actionTypes.FETCH_BLOGS_SUCCESS:
      return { ...state };

    case actionTypes.FETCH_BLOGS_FAIL:
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
