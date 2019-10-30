import { put } from "redux-saga/effects";

import axios from "../../api/blogApi";
import * as actions from "../actions";
import { currentDate } from "../../shared/utilities";

export function* fetchPostsSaga() {
  yield put(actions.fetchPostsStart());
  try {
    const response = yield axios.get("/posts");
    const posts = response.data;
    yield put(actions.fetchPostsSuccess(posts));
  } catch (error) {
    const errorMessage = error.message;
    yield put(actions.fetchPostsFail(errorMessage));
  }
}

export function* createPostSaga({ payload }) {
  const {
    newPost: { title, body, creator = "Oleh" }
  } = payload;
  const dataPost = {
    title,
    body,
    creator,
    date: currentDate()
  };

  yield put(actions.createPostStart());

  try {
    yield axios.post("/posts", dataPost);
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
    yield axios.delete(`/posts/${id}`);
    yield put(actions.deletePostSuccess());
  } catch (error) {
    // бок в АПИ (TypeError: Cannot read property 'toString' of null)
    // удаляет, но кидает ошибку
    if (error.response.status === 500) {
      yield put(actions.fetchPosts());
    } else {
      const errorMessage = error.message;
      yield put(actions.deletePostFail(errorMessage));
    }
  }
}

export function* fetchPostDetailSaga({ payload }) {
  const { id } = payload;
  yield put(actions.fetchPostDetailStart());
  try {
    const response = yield axios.get(`/posts/${id}?_embed=comments`);
    const postDetail = response.data;
    yield put(actions.fetchPostDetailSuccess(postDetail));
  } catch (error) {
    const errorMessage = error.message;
    yield put(actions.fetchPostDetailFail(errorMessage));
  }
}

export function* saveEditSaga({ payload }) {
  const {
    editedPost: { titleEdit, bodyEdit, id, creator = "Anybody", date }
  } = payload;

  const updatePost = {
    title: titleEdit,
    body: bodyEdit,
    creator,
    date
  };

  yield put(actions.saveEditStart());
  try {
    const response = yield axios.put(`/posts/${id}`, updatePost);
    console.log(response);
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
  console.log("newComment", newComment);
  yield put(actions.saveEditStart());
  try {
    const response = yield axios.post(`/comments`, newComment);
    console.log(response);
    yield put(actions.fetchPostDetail(id));
    yield put(actions.saveEditSuccess());
  } catch (error) {
    const errorMessage = error.message;
    yield put(actions.saveEditFail(errorMessage));
  }
}