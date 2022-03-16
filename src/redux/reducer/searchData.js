import {ActionTypes} from '../constants/actionType';

const initialState = {
  query:'',
  data: [],
  loading: true,
  pagination: {},
};
const SearchData = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.SET_SEARCH_DATA:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        pagination: action.payload.pagination,
      };
    case ActionTypes.LOAD_MORE_SEARCH:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        loading: false,
        pagination: action.payload.pagination,
      };
    case ActionTypes.CLEAR_SEARCH_DATA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
export default SearchData;
