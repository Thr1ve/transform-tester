import { thunk } from 'lib';

export const SET_MOVEBOX_STATE = 'SET_MOVEBOX_STATE';
export const setMoveBoxState = (matrix) =>
  ({ type: SET_MOVEBOX_STATE, matrix });

export const UPDATE_MOVEBOX_STATE = 'UPDATE_MOVEBOX_STATE';
export const updateMoveBoxState = (key, val) =>
  ({ type: UPDATE_MOVEBOX_STATE, key, val });

export const ENABLE_TRANSITION = 'ENABLE_TRANSITION';
export const enableTransition = () => ({ type: ENABLE_TRANSITION });

export const DISABLE_TRANSITION = 'DISABLE_TRANSITION';
export const disableTransition = () => ({ type: DISABLE_TRANSITION });

export const transitionMoveBox = (matrix) => dispatch => {
  dispatch(setMoveBoxState(matrix));
};
