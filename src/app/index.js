import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import "./styles.css";

const store = configureStore({ reducer: rootReducer });

function AppContainer() {
  return (
    <React.StrictMode>
      <RealStoreProvider store={store}>
        <App />
      </RealStoreProvider>
    </React.StrictMode>
  );
}

function RealStoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppContainer />, rootElement);
