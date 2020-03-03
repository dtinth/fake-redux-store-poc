import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const store = configureStore({ reducer: rootReducer });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
