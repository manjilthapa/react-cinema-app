import { MOVIE_LIST, PAGE_RESPONSE } from '../types';

const intialState = {
  list: [],
  page: 1,
  totalPages: 0
};
export default (state = intialState, action) => {
  switch (action.type) {
    case MOVIE_LIST:
      return {
        ...state,
        list: action.payload
      };
    case PAGE_RESPONSE:
      return {
        ...state,
        page: action.payload.page,
        totalPages: action.payload.totalPages
      };
    default:
      return state;
  }
};
