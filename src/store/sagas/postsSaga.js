import { put, call } from "redux-saga/effects";

import axios from "../../api/blogApi";
import * as actions from "../actions";
import { currentDate } from "../../shared/utilities";

function fetchPosts() {
  return axios.get("/posts");
}

function createPost(dataPost) {
  return axios.post("/posts", dataPost);
}

function deletePost(id) {
  return axios.delete(`/posts/${id}`);
}

function fetchPostDetail(id) {
  return axios.get(`/posts/${id}?_embed=comments`);
}

function saveEdit(id, updatePost) {
  return axios.put(`/posts/${id}`, updatePost);
}

function createComment(newComment) {
  return axios.post(`/comments`, newComment);
}

export function* fetchPostsSaga() {
  yield put(actions.fetchPostsStart());
  try {
    const response = yield call(fetchPosts);
    const posts = response.data;
    yield put(actions.fetchPostsSuccess(posts));
  } catch (error) {
    const errorMessage = error.message;
    yield put(actions.fetchPostsFail(errorMessage));
  }
}

export function* createPostSaga({ payload }) {
  const {
    newPost: { titlePost, bodyPost, creator = "Oleh" }
  } = payload;
  const dataPost = {
    title: titlePost,
    body: bodyPost,
    creator,
    date: currentDate()
  };

  yield put(actions.createPostStart());

  try {
    yield call(createPost, dataPost);
    yield put(actions.createPostSuccess());
    yield put(actions.fetchPosts());
  } catch (error) {
    const errorMessage = error.message;
    yield put(actions.createPostFail(errorMessage));
  }
}

export function* deletePostSaga({ payload }) {
  const { id } = payload;
  yield put(actions.deletePostStart());
  try {
    yield call(deletePost, id);
    yield put(actions.deletePostSuccess());
    yield put(actions.fetchPosts());
  } catch (error) {
    const errorMessage = error.message;
    yield put(actions.deletePostFail(errorMessage));
  }
}

export function* fetchPostDetailSaga({ payload }) {
  const { id } = payload;
  yield put(actions.fetchPostDetailStart());
  try {
    const response = yield call(fetchPostDetail, id);
    const postDetail = response.data;
    yield put(actions.fetchPostDetailSuccess(postDetail));
  } catch (error) {
    const errorMessage = error.message;
    yield put(actions.fetchPostDetailFail(errorMessage));
  }
}

export function* saveEditSaga({ payload }) {
  const {
    editedPost: { titlePost, bodyPost, id, creator = "Anybody", date }
  } = payload;

  const updatePost = {
    title: titlePost,
    body: bodyPost,
    creator,
    date
  };

  yield put(actions.saveEditStart());
  try {
    yield call(saveEdit, id, updatePost);
    yield put(actions.fetchPostDetail(id));
    yield put(actions.saveEditSuccess());
  } catch (error) {
    const errorMessage = error.message;
    yield put(actions.saveEditFail(errorMessage));
  }
}

export function* createCommentSaga({ payload }) {
  const {
    newComment: { body, id }
  } = payload;

  const newComment = {
    body,
    postId: id
  };
  yield put(actions.createCommentStart());
  try {
    yield call(createComment, newComment);
    yield put(actions.fetchPostDetail(id));
    yield put(actions.createCommentSuccess());
  } catch (error) {
    const errorMessage = error.message;
    yield put(actions.createCommentFail(errorMessage));
  }
}
