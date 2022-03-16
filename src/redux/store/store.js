import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import gifData from '../reducer/gifData';
import searchData from '../reducer/searchData';

const rootReducer = combineReducers({
  gifData: gifData,
  searchData: searchData,
});

const Store = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default Store;
