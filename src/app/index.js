import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import "./styles.css";
import { fakeReduxStore } from "../fake-redux-store";

const store = configureStore({ reducer: rootReducer });

function AppContainer() {
  const [fake, setFake] = useState(false);
  const StoreProvider = fake ? FakeStoreProvider : RealStoreProvider;
  return (
    <React.StrictMode>
      <label>
        <input
          type="checkbox"
          checked={fake}
          onChange={e => setFake(e.target.checked)}
        />{" "}
        Use fake store
      </label>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </React.StrictMode>
  );
}

function RealStoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
function FakeStoreProvider({ children }) {
  return <Provider store={fakeReduxStore}>{children}</Provider>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppContainer />, rootElement);
