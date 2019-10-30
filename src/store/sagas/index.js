import { takeEvery, all } from "redux-saga/effects";
import { fetchBlogsSaga } from "./blogSaga";

import * as actionTypes from "../actions/actionTypes";

export function* watchBlog() {
  yield all([takeEvery(actionTypes.FETCH_BLOGS, fetchBlogsSaga)]);
}
