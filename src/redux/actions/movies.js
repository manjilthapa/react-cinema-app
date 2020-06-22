import { MOVIE_LIST, PAGE_RESPONSE, SET_ERROR } from '../types';
import { MOVIE_API_URL } from '../../services/movie.service';

export const getMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const movies = await MOVIE_API_URL(type, pageNumber);
    const { results, page, total_pages } = movies.data;
    const pageRespone = {
      page,
      totalPages: total_pages
    };
    dispatchMethod(MOVIE_LIST, results, dispatch);
    dispatchMethod(PAGE_RESPONSE, pageRespone, dispatch);
  } catch (error) {
    if (error.respone) {
      dispatchMethod(SET_ERROR, error.respone.data.message, dispatch);
    }
  }
};

const dispatchMethod = (type, payload, dispatch) => {
  dispatch({
    type,
    payload
  });
};
