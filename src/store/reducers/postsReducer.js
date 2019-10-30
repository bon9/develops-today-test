import * as actionTypes from "../actions/actionTypes";

const initialState = {
  posts: null,
  post: null,
  isFetching: false,
  isCreating: false,
  isFetchingPostDetail: false,
  isEditing: false,
  isCommenting: false,
  error: false
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    // FETCH POST
    case actionTypes.FETCH_POSTS_START:
      return { ...state, error: false, isFetching: true };

    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload.posts,
        error: false,
        isFetching: false
      };

    case actionTypes.FETCH_POSTS_FAIL:
      return { ...state, error: payload.errorMessage, isFetching: false };

    // CREATE POST
    case actionTypes.CREATE_POST_START:
      return { ...state, error: false, isCreating: true };

    case actionTypes.CREATE_POST_SUCCESS:
      return { ...state, error: false, isCreating: false };

    case actionTypes.CREATE_POST_FAIL:
      return {
        ...state,
        error: payload.errorMessage,
        isCreating: false
      };

    // DELETE POST
    case actionTypes.DELETE_POST_START:
      return { ...state, error: false, isCommenting: true };

    case actionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        error: false,
        isCommenting: false
      };

    case actionTypes.DELETE_POST_FAIL:
      return {
        ...state,
        error: payload.errorMessage,
        isCommenting: false
      };

    // FETCH POST DETAIL

    case actionTypes.FETCH_POST_DETAIL_START:
      return { ...state, error: false, isFetchingPostDetail: true };

    case actionTypes.FETCH_POST_DETAIL_SUCCESS:
      return {
        ...state,
        post: payload.postDetail,
        error: false,
        isFetchingPostDetail: false
      };

    case actionTypes.FETCH_POST_DETAIL_FAIL:
      return {
        ...state,
        error: payload.errorMessage,
        isFetchingPostDetail: false
      };

    // SAVE EDIT
    case actionTypes.SAVE_EDIT_START:
      return { ...state, error: false, isEditing: true };

    case actionTypes.SAVE_EDIT_SUCCESS:
      return { ...state, error: false, isEditing: false };

    case actionTypes.SAVE_EDIT_FAIL:
      return { ...state, error: payload.errorMessage, isEditing: false };

    // CREATE COMMENT
    case actionTypes.CREATE_COMMENT_START:
      return { ...state, error: false, isEditing: true };

    case actionTypes.CREATE_COMMENT_SUCCESS:
      return { ...state, error: false, isEditing: false };

    case actionTypes.CREATE_COMMENT_FAIL:
      return { ...state, error: payload.errorMessage, isEditing: false };

    default:
      return state;
  }
};

export default reducer;
