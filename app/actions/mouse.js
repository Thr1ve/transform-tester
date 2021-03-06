import { updateMoveBoxState, disableTransition } from '../actions';

export const mouseMove = ({ x, y }) => (dispatch, getState) => {
  const { selected, moveBox } = getState().transformTester;
  if (selected === 'TRANSLATE') {
    dispatch(disableTransition());
    dispatch(updateMoveBoxState('tx', moveBox.tx + x));
    dispatch(updateMoveBoxState('ty', moveBox.ty - y));
  } else if (selected === 'ROTATE') {
    dispatch(disableTransition());
    dispatch(updateMoveBoxState('rx', moveBox.rx - y));
    dispatch(updateMoveBoxState('ry', moveBox.ry + x));
  }
};

export const scroll = ({ z }) => (dispatch, getState) => {
  const { selected, moveBox } = getState().transformTester;
  if (selected === 'TRANSLATE') {
    dispatch(disableTransition());
    dispatch(updateMoveBoxState('tz', moveBox.tz + z));
  } else if (selected === 'ROTATE') {
    dispatch(disableTransition());
    dispatch(updateMoveBoxState('rz', moveBox.rz - z));
  }
};
