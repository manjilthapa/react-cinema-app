import { MOVIE_LIST, PAGE_RESPONSE, SET_ERROR, LOAD_MORE_MOVIE_LIST } from '../types';
import { MOVIE_API_URL } from '../../services/movie.service';

export const getMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const response = await movieApi(type, pageNumber);
    const { results, pageRespone } = response;
    dispatchMethod(MOVIE_LIST, results, dispatch);
    dispatchMethod(PAGE_RESPONSE, pageRespone, dispatch);
  } catch (error) {
    if (error.respone) {
      dispatchMethod(SET_ERROR, error.respone.data.message, dispatch);
    }
  }
};

export const loadMoreMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const response = await movieApi(type, pageNumber);
    const { results, pageRespone } = response;
    dispatchMethod(LOAD_MORE_MOVIE_LIST, results, dispatch);
    dispatchMethod(PAGE_RESPONSE, pageRespone, dispatch);
  } catch (error) {
    if (error.respone) {
      dispatchMethod(SET_ERROR, error.respone.data.message, dispatch);
    }
  }
};

export const setResponsePageNumber = (type, pageNumber) => async (dispatch) => {
  const payload = { type, pageNumber };
  dispatchMethod(PAGE_RESPONSE, payload, dispatch);
};

const dispatchMethod = (type, payload, dispatch) => {
  dispatch({
    type,
    payload
  });
};

const movieApi = async (type, pageNumber) => {
  const movies = await MOVIE_API_URL(type, pageNumber);
  const { results, page, total_pages } = movies.data;
  const pageRespone = {
    page,
    totalPages: total_pages
  };
  return { results, pageRespone };
};
