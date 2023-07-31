import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import { rootReducer } from "./service/reducers";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers();

// Инициализируем хранилище с помощью корневого редьюсера
export const store = createStore(rootReducer, enhancer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
