import { createStore } from "redux";

export const FAKE_STATE = { __FAKE_REDUX_STORE__: true };

export const fakeReduxStore = createStore(() => FAKE_STATE);

export function isFakeState(state) {
  return state.__FAKE_REDUX_STORE__;
}

export function provideFakeSelectorResult(selector, fakeResult) {
  return state => (isFakeState(state) ? fakeResult : selector(state));
}
