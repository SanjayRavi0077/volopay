import {ActionTypes} from '../constants/actionType';

const initialState = {
  data: [],
  loading: true,
  refresh: false,
  pagination: {},
};
const GifData = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.SET_DATA:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        loading: false,
        pagination: action.payload.pagination,
      };
    case ActionTypes.SET_DATA_REFRESH:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        refresh: false,
        pagination: action.payload.pagination,
      };
    case ActionTypes.SET_REFRESH:
      return {
        ...state,
        refresh: true,
      };
    default:
      return state;
  }
};
export default GifData;
