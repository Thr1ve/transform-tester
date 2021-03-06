import { mouseMove, scroll, toggleSelected } from '../actions';

export default function addInputListeners(dispatch) {
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
