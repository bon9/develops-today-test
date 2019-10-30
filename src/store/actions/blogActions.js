import * as actionTypes from "./actionTypes";

export const fetchBlogs = () => {
  return {
    type: actionTypes.FETCH_BLOGS
  };
};

export const fetchBlogsStart = () => {
  return {
    type: actionTypes.FETCH_BLOGS_SUCCESS
  };
};

export const fetchBlogsSuccess = () => {
  return {
    type: actionTypes.FETCH_BLOGS_SUCCESS
  };
};

export const fetchBlogsFail = () => {
  return {
    type: actionTypes.FETCH_BLOGS_FAIL
  };
};
