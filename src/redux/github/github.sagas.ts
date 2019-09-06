import { call, put, takeLatest } from "redux-saga/effects";

import { FETCH_PR } from "./github.constants";
import { fetchPrSuccess } from "./github.actions";
import { makeFetchPrCall } from "./github.api";

export function* fetchPr() {
  const prData = yield call(makeFetchPrCall);
  yield put(fetchPrSuccess(prData));
}

export function* githubSaga() {
  yield takeLatest(FETCH_PR, fetchPr);
}
