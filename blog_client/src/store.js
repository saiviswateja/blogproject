import {createStore,applyMiddleware,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { articleReducer } from './reducers/articleReducer';

const intialState = {articles:[]};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(articleReducer,intialState,composeEnhancer(applyMiddleware(thunk)));

export default store;