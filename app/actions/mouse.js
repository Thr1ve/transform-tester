import { translateMatrix } from '../lib/matrices/transforms';
import { updateMoveBoxStateDirect, updateMoveBoxState } from '../actions';

export const mouseMove = event => (dispatch, getState) => {
  const { selected, moveBox } = getState().transformTester;
  if (selected === 'TRANSLATE') {
    dispatch(updateMoveBoxState('tx', moveBox.tx + event.x));
    dispatch(updateMoveBoxState('ty', moveBox.ty - event.y));
  } else if (selected === 'ROTATE') {
    dispatch(updateMoveBoxState('rx', moveBox.rx - event.y));
    dispatch(updateMoveBoxState('ry', moveBox.ry + event.x));
  }
};

export const scroll = event => (dispatch, getState) => {
  const { selected, moveBox } = getState().transformTester;
  if (selected === 'TRANSLATE') {
    dispatch(updateMoveBoxState('tz', moveBox.tz + event.z));
  } else if (selected === 'ROTATE') {
    dispatch(updateMoveBoxState('rz', moveBox.rz - event.z));
  }
};
