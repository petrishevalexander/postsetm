import {DELETE_POST, SET_POSTS, GET_COMMENTS} from './types';

export const setPosts = payload => ({
  type: SET_POSTS,
  payload: payload,
});

export const deletePost = payload => ({
  type: DELETE_POST,
  payload: payload,
});

export const getComments = payload => ({
  type: GET_COMMENTS,
  payload: payload,
});
