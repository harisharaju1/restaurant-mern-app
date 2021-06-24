//these functions part of the Redux core NPM package :-
//combineReducers help to combine all your reducers which you've split into slice reducers for Reducer composition
//applyMiddleware is the store enhancer using which you can implement middleware
import { applyMiddleware, combineReducers, createStore } from "redux";
//this NPM package connects the Chrome extension to the Redux store which enables time-travel debugging plus combining store enhancers
import { composeWithDevTools } from "redux-devtools-extension";
//middleware that allows us to pass functions as paramters to the dispatch call
//so that we can include async logic in this function before we dispatch actions
import thunk from "redux-thunk";
import categoryReducer from "../redux/reducers/categoryReducers";
import itemReducer from "../redux/reducers/itemReducers";
import loadingReducer from "../redux/reducers/loadingReducers";
import messageReducer from "../redux/reducers/messageReducers";

const reducer = combineReducers({
  loading: loadingReducer,
  messages: messageReducer,
  categories: categoryReducer,
  items: itemReducer,
});

const intialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
