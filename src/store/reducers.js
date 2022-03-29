import {DELETE_POST, SET_POSTS} from './types';

const initialState = {
  data: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    case DELETE_POST:
      return {
        ...state,
        data: state.data.filter(post => post.id !== action.payload),
      };
    default:
      return state;
  }
};
