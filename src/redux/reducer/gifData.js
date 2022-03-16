import {ActionTypes} from '../constants/actionType';

const initialState = {
  data: [],
  loading: true,
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
    default:
      return state;
  }
};
export default GifData;
