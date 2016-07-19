import { mouseMove, scroll, toggleSelected } from '../actions';

// http://stackoverflow.com/a/34920239/5708364
const isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

export default function addInputListeners(dispatch) {
  if (isSafari) {
    console.warn('Please use Chrome / Firefox for mouse control');
    return;
  }

  document.body.addEventListener('mousemove', e => {
    if (e.shiftKey) {
      e.preventDefault();
      console.log(e);
      dispatch(mouseMove({ x: e.movementX, y: e.movementY }));
    }
  });

  document.body.addEventListener('wheel', e => {
    if (e.shiftKey) {
      e.preventDefault();
      dispatch(scroll({ z: e.deltaY }));
    }
  });

  document.body.addEventListener('keydown', e => {
    // Tab key
    if (e.keyCode === 9) {
      dispatch(toggleSelected());
    }
  });
}
