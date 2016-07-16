
import { combineReducers } from 'redux';

import snapShots from './snapShots';
import moveBox from './moveBox';

const rootReducer = combineReducers({
  snapShots,
  moveBox
});

export default rootReducer;
