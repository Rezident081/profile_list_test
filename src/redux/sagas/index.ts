import { takeEvery } from "redux-saga/effects";
import profilesWorker from "./workers/getProfiles";
import userWorker from "./workers/getUser";
import { REQUEST_PROFILES } from "../constants/profiles";
import { REQUEST_USER } from "../constants/user";

export default function* rootSaga() {
  yield [
    yield takeEvery(REQUEST_PROFILES, profilesWorker),
    yield takeEvery(REQUEST_USER, userWorker),
  ];
}
