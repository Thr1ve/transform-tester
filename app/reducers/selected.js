import { TOGGLE_SELECTED } from '../actions';

const defaultState = 'TRANSLATE';

export default function selectedReducer(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_SELECTED:
      if (state === 'TRANSLATE') {
        return 'ROTATE';
      }
      return 'TRANSLATE';
    default:
      return state;
  }
}
