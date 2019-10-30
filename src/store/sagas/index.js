import { takeEvery, all } from "redux-saga/effects";
import {
  fetchPostsSaga,
  createPostSaga,
  deletePostSaga,
  fetchPostDetailSaga,
  saveEditSaga,
  createCommentSaga
} from "./postsSaga";

import * as actionTypes from "../actions/actionTypes";

export function* watchPosts() {
  yield all([
    takeEvery(actionTypes.FETCH_POSTS, fetchPostsSaga),
    takeEvery(actionTypes.CREATE_POST, createPostSaga),
    takeEvery(actionTypes.DELETE_POST, deletePostSaga),
    takeEvery(actionTypes.FETCH_POST_DETAIL, fetchPostDetailSaga),
    takeEvery(actionTypes.SAVE_EDIT, saveEditSaga),
    takeEvery(actionTypes.CREATE_COMMENT, createCommentSaga)
  ]);
}
