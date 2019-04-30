//createStore is used to make redux store
//applyMiddleware is used to hookup and middleware inside the application
import { createStore, applyMiddleware} from "redux";
//thunk is used to handle async action creators
import thunk from "redux-thunk";

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  return store;
}