import * as actionTypes from "./actionTypes";

// FETCH POST
export const fetchPosts = () => {
  return {
    type: actionTypes.FETCH_POSTS
  };
};

export const fetchPostsStart = () => {
  return {
    type: actionTypes.FETCH_POSTS_START
  };
};

export const fetchPostsSuccess = posts => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    payload: { posts }
  };
};

export const fetchPostsFail = errorMessage => {
  return {
    type: actionTypes.FETCH_POSTS_FAIL,
    payload: { errorMessage }
  };
};

// CREATE POST

export const createPost = newPost => {
  return {
    type: actionTypes.CREATE_POST,
    payload: { newPost }
  };
};

export const createPostStart = () => {
  return {
    type: actionTypes.CREATE_POST_START
  };
};

export const createPostSuccess = () => {
  return {
    type: actionTypes.CREATE_POST_SUCCESS
  };
};

export const createPostFail = errorMessage => {
  return {
    type: actionTypes.CREATE_POST_FAIL,
    payload: { errorMessage }
  };
};

// DELETE POST
export const deletePost = id => {
  return {
    type: actionTypes.DELETE_POST,
    payload: { id }
  };
};

export const deletePostStart = () => {
  return {
    type: actionTypes.DELETE_POST_START
  };
};

export const deletePostSuccess = () => {
  return {
    type: actionTypes.DELETE_POST_SUCCESS
  };
};

export const deletePostFail = errorMessage => {
  return {
    type: actionTypes.DELETE_POST_FAIL,
    payload: { errorMessage }
  };
};

// FETCH DETAIL POST
export const fetchPostDetail = id => {
  return {
    type: actionTypes.FETCH_POST_DETAIL,
    payload: { id }
  };
};

export const fetchPostDetailStart = () => {
  return {
    type: actionTypes.FETCH_POST_DETAIL_START
  };
};

export const fetchPostDetailSuccess = postDetail => {
  return {
    type: actionTypes.FETCH_POST_DETAIL_SUCCESS,
    payload: { postDetail }
  };
};

export const fetchPostDetailFail = errorMessage => {
  return {
    type: actionTypes.FETCH_POST_DETAIL_FAIL,
    payload: { errorMessage }
  };
};

// EDIT POST
export const saveEdit = editedPost => {
  return {
    type: actionTypes.SAVE_EDIT,
    payload: { editedPost }
  };
};

export const saveEditStart = () => {
  return {
    type: actionTypes.SAVE_EDIT_START
  };
};
export const saveEditSuccess = () => {
  return {
    type: actionTypes.SAVE_EDIT_SUCCESS
  };
};
export const saveEditFail = errorMessage => {
  return {
    type: actionTypes.SAVE_EDIT_FAIL,
    payload: { errorMessage }
  };
};

// CREATE COMMENT
export const createComment = newComment => {
  return {
    type: actionTypes.CREATE_COMMENT,
    payload: { newComment }
  };
};

export const createCommentStart = () => {
  return {
    type: actionTypes.CREATE_COMMENT_START
  };
};

export const createCommentSuccess = () => {
  return {
    type: actionTypes.CREATE_COMMENT_SUCCESS
  };
};

export const createCommentFail = errorMessage => {
  return {
    type: actionTypes.CREATE_COMMENT_FAIL,
    payload: { errorMessage }
  };
};
