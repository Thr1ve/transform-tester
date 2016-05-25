import {
  UPDATE_MOVEBOX_STATE, SET_MOVEBOX_STATE,
  ENABLE_TRANSITION, DISABLE_TRANSITION
} from './actions';

const defaultState = {
  tx: 0, ty: 0, tz: 0,
  rx: 0, ry: 0, rz: 0,
  scx: 1, scy: 1, scz: 1,
  skx: 0, sky: 0,
  perspective: 1000,
  transition: false
};

export default function moveBoxReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_MOVEBOX_STATE:
      return {
        ...state,
        [action.key]: action.val
      };
    case SET_MOVEBOX_STATE:
      return {
        ...state,
        ...action.matrix,
        transition: state.transition
      };
    case ENABLE_TRANSITION:
      return {
        ...state,
        transition: true
      };
    case DISABLE_TRANSITION:
      return {
        ...state,
        transition: false
      };
    default:
      return state;
  }
}
