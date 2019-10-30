import { put } from "redux-saga/effects";
import axios from "../../api/blogApi";

import * as actions from "../actions";

export function* fetchBlogsSaga({ payload }) {
  // yield put(actions.fetchBlogsStart());
  // try {
  //   const response = yield axios.post("/");
  //   const data = response.data;
  //   yield put(actions.fetchBlogsSuccess());
  // } catch (error) {
  //   yield put(actions.fetchBlogsFail());
  // }
}
