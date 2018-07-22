import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware } from "react-router-redux";
import mainReducer from "./reducers/inform";

export const history = createHistory();

const rootReducer = combineReducers({
  mainReducer,
  router: routerReducer
});

const middleware = [routerMiddleware(history), thunkMiddleware];

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);

export default store;
