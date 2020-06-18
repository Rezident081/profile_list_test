import { call, put } from "redux-saga/effects";
import { requestUserSuccess, requestUserError } from "../../actions/user";
import axios from "axios";

export default function* getProfiles(action: any) {
  try {
    const { data } = yield call(
      axios.get,
      `https://api.github.com/users/${action.payload}`
    );
    yield put(requestUserSuccess(data));
  } catch (e) {
    yield put(requestUserError());
  }
}
