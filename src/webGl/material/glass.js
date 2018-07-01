/**
 * Created by yonghan on 2018/6/30.
 */

import * as THREE from 'three';

let Glass = (color=0x000000) => {

    let geometry = new THREE.CubeGeometry(10, 10, 0.5);
    let material = new THREE.MeshPhongMaterial({color: color, opacity: 0.2, transparent: true, specular: 0xffffff});
    let mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;

    return mesh
};

export {Glass}