import { identity, translate, rotate, scale, skew } from '../lib/matrices/transforms';
import { multiply } from '../lib/matrices/math';

import {
  UPDATE_MOVEBOX_STATE, SET_MOVEBOX_STATE,
  ENABLE_TRANSITION, DISABLE_TRANSITION
} from '../actions';

const matrixMap = {
  tx: translate('x'), ty: translate('y'), tz: translate('z'),
  rx: rotate('x'), ry: rotate('y'), rz: rotate('z'),
  scx: scale('x'), scy: scale('y'), scz: scale('z'),
  skx: skew('x'), sky: skew('y')
};

const defaultState = {
  tx: 0, ty: 0, tz: 0,
  rx: 0, ry: 0, rz: 0,
  scx: 1, scy: 1, scz: 1,
  skx: 0, sky: 0,
  perspective: 1000,
  transition: false,
  matrix: identity()
};

export default function moveBoxReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_MOVEBOX_STATE:
      return {
        ...state,
        [action.key]: action.val,
        matrix: multiply(
          state.matrix,
          matrixMap[action.key](getDifference(state, action))
        )
      };
    case SET_MOVEBOX_STATE:
      return {
        ...state,
        ...action.matrix,
        // TODO:
        matrix: identity(),
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

function getDifference(state, action) {
  switch (action.key) {
    case 'scx':
    case 'scy':
    case 'scz':
     // TODO:
      return state[action.key] - action.val;
    case 'tx':
    case 'tz':
      return -(state[action.key] - action.val);
    default:
      return state[action.key] - action.val;
  }
}
