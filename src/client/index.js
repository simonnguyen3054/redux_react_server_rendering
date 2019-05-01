//starting point for client side application
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "babel-polyfill";
import Routes from "./Routes";
//createStore is used to make redux store
//applyMiddleware is used to hookup and middleware inside the application
import { createStore, applyMiddleware} from "redux";
//thunk is used to handle async action creators
import thunk from "redux-thunk";
//provider is used to tie store and react app together
import { Provider } from "react-redux";
import reducers from "./reducers";
import {renderRoutes} from "react-router-config";

//create new redux store to used on the client side of the application
const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
