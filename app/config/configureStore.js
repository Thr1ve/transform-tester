
import { applyMiddleware, createStore, compose } from 'redux';
// redux-logger simply logs all actions to the console
import createLogger from 'redux-logger';
// redux-thunk lets us handle asynchronous actions
import thunk from 'redux-thunk';

import { mouseMove, scroll, toggleSelected } from '../actions';
import rootReducer from './rootReducer';

export default function configureStore() {
  const logger = createLogger({ collapsed: true });
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, logger),
      // This line simply enables the redux dev-tools chrome extension for our app
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  // TODO: move this out of configureStore
  document.body.addEventListener('mousemove', e => {
    if (e.shiftKey) {
      e.preventDefault();
      store.dispatch(mouseMove({ x: e.movementX, y: e.movementY }));
    }
  });

  document.body.addEventListener('wheel', e => {
    if (e.shiftKey) {
      e.preventDefault();
      store.dispatch(scroll({ z: e.deltaY }));
    }
  });

  document.body.addEventListener('keydown', e => {
    // Tab key
    if (e.keyCode === 9) {
      store.dispatch(toggleSelected());
    }
  });

  return store;
}
