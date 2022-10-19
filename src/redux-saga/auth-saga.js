import { takeLatest, call, put } from "redux-saga/effects";
import {
  CHECK_LOGIN,
  errorInLogin,
  login,
  REQUEST_LOGIN,
  REQUEST_SIGNOUT,
  logout,
} from "../redux/authSlice";
import { checkLogin, loginWithUsername, userLogout } from "../services/auth";

export function* handleLogin(action) {
  try {
    const user = yield call(loginWithUsername, action.payload);
    yield put(login(user));
  } catch (error) {
    yield put(errorInLogin(error.message));
  }
}

export function* checkLoginHandler(action) {
  try {
    const user = yield call(checkLogin);
    yield put(login(user));
  } catch (error) {}
}

export function* handleSignOut() {
  try {
    const response = yield call(userLogout);
    yield put(logout(response));
  } catch (error) {}
}

export function* authSaga() {
  yield takeLatest(REQUEST_LOGIN, handleLogin);
  yield takeLatest(CHECK_LOGIN, checkLoginHandler);
  yield takeLatest(REQUEST_SIGNOUT, handleSignOut);
}
