import { createStore } from "redux";

const FAKE_STATE = { __FAKE_REDUX_STORE__: true };

/**
 * Use this store in tests or storybooks.
 */
export const fakeReduxStore = createStore(() => FAKE_STATE);

/**
 * Checks if the store’s state belongs to the `fakeReduxStore`.
 */
export function isFakeState(state) {
  return state.__FAKE_REDUX_STORE__;
}

/**
 * Wrap a Redux selector with this higher-order selector to make
 * it return `fakeResult` when used with `fakeReduxStore`.
 */
export function provideFakeSelectorResult(selector, fakeResult) {
  return state => (isFakeState(state) ? fakeResult : selector(state));
}
