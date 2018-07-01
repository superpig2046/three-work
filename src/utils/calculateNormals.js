/**
 * Created by yonghan on 2018/7/1.
 */

import * as THREE from 'three';

let calculateNormals = (vertices, itemSize=3) => {
    let normals = [];

    for (let i =0 ; i < vertices.length / 3 / itemSize; i++){
        let pa = new THREE.Vector3();
        let pb = new THREE.Vector3();
        let pc = new THREE.Vector3();

        pa.set(vertices[i * 3 * itemSize], vertices[i * 3 * itemSize + 1], vertices[i * 3 * itemSize + 2]);
        pb.set(vertices[i * 3 * itemSize + 3], vertices[i * 3 * itemSize + 4], vertices[i * 3 * itemSize + 5]);
        pc.set(vertices[i * 3 * itemSize + 6], vertices[i * 3 * itemSize + 7], vertices[i * 3 * itemSize + 8]);

        let ab = new THREE.Vector3();
        let cb = new THREE.Vector3();

        cb.subVectors(pc, pb);
        ab.subVectors(pa, pb);
        cb.cross(ab);
        cb.normalize();

        for (let j=0 ; j < itemSize; j++){
            normals.push(cb.x);
            normals.push(cb.y);
            normals.push(cb.z);
        }
    }

    return new Float32Array(normals);
};


export {calculateNormals}