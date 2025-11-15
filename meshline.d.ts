// meshline.d.ts

import * as THREE from "three";

// Module types for @lume/three-meshline
declare module "@lume/three-meshline" {
  export class MeshLine extends THREE.BufferGeometry {
    setPoints(points: THREE.Vector3[] | number[] | Float32Array): void;
  }
  export class MeshLineGeometry extends THREE.BufferGeometry {}
  export class MeshLineMaterial extends THREE.Material {}
}

// JSX intrinsic tags for react-three-fiber
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLine: any;
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

export {};
