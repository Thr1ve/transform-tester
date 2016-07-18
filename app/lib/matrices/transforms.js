
const { sin, cos } = Math;
const degreesToRadians = d => d * (Math.PI / 180);


export const identity = () => [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1
];


const translatMatrix = (x = 0, y = 0, z = 0) => [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  x, y, z, 1
];

const t = {
  x: x => translatMatrix(x),
  y: y => translatMatrix(undefined, y),
  z: z => translatMatrix(undefined, undefined, z)
};

export const translate = axis => n => t[axis](n);


const scaleMatrix = (x = 1, y = 1, z = 1) => [
  x, 0, 0, 0,
  0, y, 0, 0,
  0, 0, z, 0,
  0, 0, 0, 1
];

const sc = {
  x: x => scaleMatrix(x),
  y: y => scaleMatrix(undefined, y),
  z: z => scaleMatrix(undefined, undefined, z)
};

export const scale = axis => n => sc[axis](n);


const r = {
  x: a => [
    1, 0, 0, 0,
    0, cos(a), -sin(a), 0,
    0, sin(a), cos(a), 0,
    0, 0, 0, 1
  ],
  y: a => [
    cos(a), 0, sin(a), 0,
    0, 1, 0, 0,
    -sin(a), 0, cos(a), 0,
    0, 0, 0, 1
  ],
  z: a => [
    cos(a), -sin(a), 0, 0,
    sin(a), cos(a), 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ]
};

export const rotate = axis => a => r[axis](degreesToRadians(a));
