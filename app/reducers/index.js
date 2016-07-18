
import { combineReducers } from 'redux';

import snapShots from './snapShots';
import moveBox from './moveBox';
import selected from './selected';

const rootReducer = combineReducers({
  snapShots,
  moveBox,
  selected
});

export default rootReducer;
