var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/alea/alea.js
var require_alea = __commonJS({
  "node_modules/alea/alea.js"(exports, module) {
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = factory();
      } else if (typeof define === "function" && define.amd) {
        define(factory);
      } else {
        root.Alea = factory();
      }
    })(exports, function() {
      "use strict";
      Alea.importState = function(i) {
        var random = new Alea();
        random.importState(i);
        return random;
      };
      return Alea;
      function Alea() {
        return (function(args) {
          var s0 = 0;
          var s1 = 0;
          var s2 = 0;
          var c = 1;
          if (args.length == 0) {
            args = [+/* @__PURE__ */ new Date()];
          }
          var mash = Mash();
          s0 = mash(" ");
          s1 = mash(" ");
          s2 = mash(" ");
          for (var i = 0; i < args.length; i++) {
            s0 -= mash(args[i]);
            if (s0 < 0) {
              s0 += 1;
            }
            s1 -= mash(args[i]);
            if (s1 < 0) {
              s1 += 1;
            }
            s2 -= mash(args[i]);
            if (s2 < 0) {
              s2 += 1;
            }
          }
          mash = null;
          var random = function() {
            var t = 2091639 * s0 + c * 23283064365386963e-26;
            s0 = s1;
            s1 = s2;
            return s2 = t - (c = t | 0);
          };
          random.next = random;
          random.uint32 = function() {
            return random() * 4294967296;
          };
          random.fract53 = function() {
            return random() + (random() * 2097152 | 0) * 11102230246251565e-32;
          };
          random.version = "Alea 0.9";
          random.args = args;
          random.exportState = function() {
            return [s0, s1, s2, c];
          };
          random.importState = function(i2) {
            s0 = +i2[0] || 0;
            s1 = +i2[1] || 0;
            s2 = +i2[2] || 0;
            c = +i2[3] || 0;
          };
          return random;
        })(Array.prototype.slice.call(arguments));
      }
      function Mash() {
        var n = 4022871197;
        var mash = function(data) {
          data = data.toString();
          for (var i = 0; i < data.length; i++) {
            n += data.charCodeAt(i);
            var h = 0.02519603282416938 * n;
            n = h >>> 0;
            h -= n;
            h *= n;
            n = h >>> 0;
            h -= n;
            n += h * 4294967296;
          }
          return (n >>> 0) * 23283064365386963e-26;
        };
        mash.version = "Mash 0.9";
        return mash;
      }
    });
  }
});

// node_modules/simplex-noise/dist/esm/simplex-noise.js
var SQRT3 = /* @__PURE__ */ Math.sqrt(3);
var SQRT5 = /* @__PURE__ */ Math.sqrt(5);
var F2 = 0.5 * (SQRT3 - 1);
var G2 = (3 - SQRT3) / 6;
var F3 = 1 / 3;
var G3 = 1 / 6;
var F4 = (SQRT5 - 1) / 4;
var G4 = (5 - SQRT5) / 20;
var fastFloor = (x) => Math.floor(x) | 0;
var grad2 = /* @__PURE__ */ new Float64Array([
  1,
  1,
  -1,
  1,
  1,
  -1,
  -1,
  -1,
  1,
  0,
  -1,
  0,
  1,
  0,
  -1,
  0,
  0,
  1,
  0,
  -1,
  0,
  1,
  0,
  -1
]);
function createNoise2D(random = Math.random) {
  const perm = buildPermutationTable(random);
  const permGrad2x = new Float64Array(perm).map((v) => grad2[v % 12 * 2]);
  const permGrad2y = new Float64Array(perm).map((v) => grad2[v % 12 * 2 + 1]);
  return function noise2D2(x, y) {
    let n0 = 0;
    let n1 = 0;
    let n2 = 0;
    const s = (x + y) * F2;
    const i = fastFloor(x + s);
    const j = fastFloor(y + s);
    const t = (i + j) * G2;
    const X0 = i - t;
    const Y0 = j - t;
    const x0 = x - X0;
    const y0 = y - Y0;
    let i1, j1;
    if (x0 > y0) {
      i1 = 1;
      j1 = 0;
    } else {
      i1 = 0;
      j1 = 1;
    }
    const x1 = x0 - i1 + G2;
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2;
    const y2 = y0 - 1 + 2 * G2;
    const ii = i & 255;
    const jj = j & 255;
    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 >= 0) {
      const gi0 = ii + perm[jj];
      const g0x = permGrad2x[gi0];
      const g0y = permGrad2y[gi0];
      t0 *= t0;
      n0 = t0 * t0 * (g0x * x0 + g0y * y0);
    }
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 >= 0) {
      const gi1 = ii + i1 + perm[jj + j1];
      const g1x = permGrad2x[gi1];
      const g1y = permGrad2y[gi1];
      t1 *= t1;
      n1 = t1 * t1 * (g1x * x1 + g1y * y1);
    }
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 >= 0) {
      const gi2 = ii + 1 + perm[jj + 1];
      const g2x = permGrad2x[gi2];
      const g2y = permGrad2y[gi2];
      t2 *= t2;
      n2 = t2 * t2 * (g2x * x2 + g2y * y2);
    }
    return 70 * (n0 + n1 + n2);
  };
}
function buildPermutationTable(random) {
  const tableSize = 512;
  const p = new Uint8Array(tableSize);
  for (let i = 0; i < tableSize / 2; i++) {
    p[i] = i;
  }
  for (let i = 0; i < tableSize / 2 - 1; i++) {
    const r = i + ~~(random() * (256 - i));
    const aux = p[i];
    p[i] = p[r];
    p[r] = aux;
  }
  for (let i = 256; i < tableSize; i++) {
    p[i] = p[i - 256];
  }
  return p;
}

// src/workers/terrainTextureWorker.ts
var import_alea = __toESM(require_alea());

// src/utils/lerp.ts
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function inverseLerp(a, b, v) {
  return (v - a) / (b - a);
}
function lerpColor(c1, c2, t) {
  return [
    Math.floor(lerp(c1[0], c2[0], t)),
    Math.floor(lerp(c1[1], c2[1], t)),
    Math.floor(lerp(c1[2], c2[2], t))
  ];
}

// src/utils/noise.ts
function redistributeNoise(noiseMap2, percentile) {
  let upperBound = void 0;
  let lowerBound = void 0;
  for (let i = 0; i < noiseMap2.length; i++) {
    const item = noiseMap2[i];
    if (item.fraction === percentile) {
      return item.value;
    } else if (item.fraction > percentile) {
      if (upperBound) {
        if (item.fraction < upperBound.fraction) {
          upperBound = item;
        }
      } else {
        upperBound = item;
      }
    } else if (item.fraction < percentile) {
      if (lowerBound) {
        if (item.fraction > lowerBound.fraction) {
          lowerBound = item;
        }
      } else {
        lowerBound = item;
      }
    }
  }
  if (!lowerBound || !upperBound) {
    return percentile;
  }
  if (!lowerBound) {
    return upperBound.value;
  } else if (!upperBound) {
    return lowerBound.value;
  }
  const t = inverseLerp(lowerBound.fraction, upperBound.fraction, percentile);
  return lerp(lowerBound.value, upperBound.value, t);
}
function percentileToElevation(elevationMap2, percentile) {
  let upperBound = void 0;
  let lowerBound = void 0;
  for (let i = 0; i < elevationMap2.length; i++) {
    const item = elevationMap2[i];
    if (item.fraction === percentile) {
      return item.value;
    } else if (item.fraction > percentile) {
      if (upperBound) {
        if (item.fraction < upperBound.fraction) {
          upperBound = item;
        }
      } else {
        upperBound = item;
      }
    } else if (item.fraction < percentile) {
      if (lowerBound) {
        if (item.fraction > lowerBound.fraction) {
          lowerBound = item;
        }
      } else {
        lowerBound = item;
      }
    }
  }
  const t = inverseLerp(lowerBound.fraction, upperBound.fraction, percentile);
  return lerp(lowerBound.value, upperBound.value, t);
}
function fractalNoise2D(noise2D2, coords, baseFrequency = 1, octaves = 5, options = { lacunarity: 2, persistence: 0.5 }) {
  const { lacunarity, persistence } = options;
  let height = 0;
  let frequency = baseFrequency;
  let amplitude = 1;
  let maxAmplitude = 0;
  for (let i = 0; i < octaves; i++) {
    const [xOffset, zOffset] = [i * 1e3, i * 1e3];
    height += noise2D2(coords.x * frequency + xOffset, coords.z * frequency + zOffset) * amplitude;
    maxAmplitude += amplitude;
    frequency *= lacunarity;
    amplitude *= persistence;
  }
  return height / maxAmplitude;
}

// src/workers/terrainTextureWorker.ts
var noise2D;
var chunkSize;
var terrainFrequency;
var terrainOctaves;
var terrainScaleVertical;
var lodBaseTextureResolution = 2 ** 8;
var terrainTextureHeightColors = [];
var noiseMap = [];
var elevationMap = [];
self.onmessage = function(e) {
  if (e.data.type === "init") {
    noise2D = createNoise2D((0, import_alea.default)(e.data.seed));
    chunkSize = e.data.chunkSize;
    terrainFrequency = e.data.terrainFrequency;
    terrainOctaves = e.data.terrainOctaves;
    terrainScaleVertical = e.data.terrainScaleVertical;
    lodBaseTextureResolution = e.data.lodBaseTextureResolution;
    terrainTextureHeightColors = e.data.terrainTextureHeightColors;
    noiseMap = e.data.noiseMap;
    elevationMap = e.data.elevationMap;
    return;
  }
  const { x, z, lod } = e.data;
  const resolution = Math.max(lodBaseTextureResolution / 2 ** lod, 1);
  // console.log(`TerrainTextureWorker '${x},${z}' -> lod: ${lod}, resolution: ${resolution}`);
  const size = resolution * resolution;
  const colorData = new Uint8Array(size * 4);
  const xWorldOffset = x * chunkSize - chunkSize / 2 + 1 / 2 / resolution;
  const zWorldOffset = z * chunkSize - chunkSize / 2 + 1 / 2 / resolution;
  for (let zPixel = 0; zPixel < resolution; zPixel++) {
    for (let xPixel = 0; xPixel < resolution; xPixel++) {
      const xLocal = xPixel / resolution * chunkSize;
      const zLocal = zPixel / resolution * chunkSize;
      const xWorld = xLocal + xWorldOffset;
      const zWorld = zLocal + zWorldOffset;
      const rawNoise = fractalNoise2D(
        noise2D,
        { x: xWorld, z: zWorld },
        terrainFrequency,
        terrainOctaves
      );
      const normalizedNoise = redistributeNoise(noiseMap, rawNoise / 2 + 0.5);
      const yLocal = percentileToElevation(elevationMap, normalizedNoise);
      let color = [0, 0, 0];
      const colors = terrainTextureHeightColors;
      if (colors.length === 1) {
        color = colors[0].color;
      } else if (colors.length > 1) {
        if (yLocal <= colors[0].height) {
          color = colors[0].color;
        } else if (yLocal >= colors[colors.length - 1].height) {
          color = colors[colors.length - 1].color;
        } else {
          let prev = colors[0];
          let next = colors[colors.length - 1];
          for (let i = 1; i < colors.length; i++) {
            if (yLocal < colors[i].height) {
              next = colors[i];
              prev = colors[i - 1];
              break;
            }
          }
          const t = inverseLerp(prev.height, next.height, yLocal);
          color = lerpColor(prev.color, next.color, t);
        }
      }
      const stride = (zPixel * resolution + xPixel) * 4;
      colorData[stride + 0] = color[0];
      colorData[stride + 1] = color[1];
      colorData[stride + 2] = color[2];
      colorData[stride + 3] = 255;
    }
  }
  const res = {
    x,
    z,
    lod,
    resolution,
    colorData
  };
  self.postMessage(res);
};
