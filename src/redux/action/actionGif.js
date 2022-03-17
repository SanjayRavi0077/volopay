import getGif from '../../apis/getGif';
import {ActionTypes} from '../constants/actionType';

export const fetchTrending = (offset, limit) => async dispatch => {
  try {
    const response = await getGif.get(
      `/trending?limit=${limit}&rating=g&offset=${offset}`,
    );
    dispatch({type: ActionTypes.SET_DATA, payload: response.data});
  } catch (err) {
    console.error(err);
  }
};

export const fetchTrendingRefresh = (offset, limit) => async dispatch => {
  try {
    const response = await getGif.get(
      `/trending?limit=${limit}&rating=g&offset=${offset}`,
    );
    dispatch({type: ActionTypes.SET_DATA_REFRESH, payload: response.data});
  } catch (err) {
    console.error(err);
  }
};
export const setRefresh = () => {
  return {type: ActionTypes.SET_REFRESH};
};

export const setLoading = () => {
  return {type: ActionTypes.SET_LOADING};
};

export const setSearchLoading = () => {
  return {type: ActionTypes.SET_SEARCH_LOADING};
};

export const searchGif = (limit, query) => async dispatch => {
  try {
    const response = await getGif.get(
      `/search?limit=${limit}&rating=g&lang=en&q=${query}`,
    );
    dispatch({type: ActionTypes.SET_SEARCH_DATA, payload: response.data});
  } catch (err) {
    console.error(err);
  }
};

export const loadMoreSearchGif = (offset, limit, query) => async dispatch => {
  try {
    const response = await getGif.get(
      `/search?limit=${limit}&rating=g&lang=en&offset=${offset}&q=${query}`,
    );
    dispatch({type: ActionTypes.LOAD_MORE_SEARCH, payload: response.data});
  } catch (err) {
    console.error(err);
  }
};

export const clearSearch = () => {
  return {type: ActionTypes.CLEAR_SEARCH_DATA};
};
