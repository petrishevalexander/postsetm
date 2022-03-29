import {DELETE_POST, SET_POSTS} from './types';

export const setPosts = payload => ({
  type: SET_POSTS,
  payload: payload,
});

export const deletePost = payload => ({
  type: DELETE_POST,
  payload: payload,
});
