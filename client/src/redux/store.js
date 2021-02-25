import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import loadingReducer from '../redux/reducers/loadingReducers';
import messageReducer from '../redux/reducers/messageReducers';
import categoryReducer from '../redux/reducers/categoryReducers';
import itemReducer from '../redux/reducers/itemReducers';

const reducer = combineReducers({
    loading: loadingReducer,
    messages: messageReducer,
    categories: categoryReducer,
    items: itemReducer,
});

const intialState = {}

const middleware = [thunk]

const store = createStore(reducer, intialState, composeWithDevTools( applyMiddleware(...middleware)));

export default store;