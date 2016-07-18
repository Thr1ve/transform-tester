
const dotProduct = (a, b) => (row, col) => (
  a[col] * b[row * 4] +
  a[col + 4] * b[row * 4 + 1] +
  a[col + 8] * b[row * 4 + 2] +
  a[col + 12] * b[row * 4 + 3]
);

export function multiply(a, b) {
  const d = dotProduct(a, b);
  return [
    d(0, 0), d(0, 1), d(0, 2), d(0, 3),
    d(1, 0), d(1, 1), d(1, 2), d(1, 3),
    d(2, 0), d(2, 1), d(2, 2), d(2, 3),
    d(3, 0), d(3, 1), d(3, 2), d(3, 3)
  ];
}

// const m = [
//    0,  1,  2,  3,
//    4,  5,  6,  7,
//    8,  9, 10, 11,
//   12, 13, 14, 15
// ];
//
// const ident = [
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   0, 0, 0, 1
// ];
//
// console.log(multiply(m, ident));
