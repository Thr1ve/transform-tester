
// http://stackoverflow.com/a/34920239/5708364
export const isSafari = Object.prototype.toString
  .call(window.HTMLElement).indexOf('Constructor') > 0;
