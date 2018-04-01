let gl = null;
let glCanvas = null;

let aspectRatio;
let currentRotation = [ 0, 1 ];
let currentScale = [ 1.0, 1.0 ];

let vertexArray;
let vertexBuffer;
let vertexNumComponents;
let vertexCount;

let uScalingFactor;
let uGlobalColor;
let uRotationVector;
let aVertexPosition;

let previousTime = 0.0;
let degreesPerSecond = 90.0;