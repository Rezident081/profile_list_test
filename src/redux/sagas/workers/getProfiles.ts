import { call, put } from "redux-saga/effects";
import {
  requestProfilesSuccess,
  requestProfilesError,
} from "../../actions/profiles";
import axios from "axios";

export default function* getProfiles() {
  try {
    const { data } = yield call(axios.get, "https://api.github.com/users");
    yield put(requestProfilesSuccess(data));
  } catch (e) {
    yield put(requestProfilesError());
  }
}
