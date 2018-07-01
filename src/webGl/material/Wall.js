/**
 * Created by yonghan on 2018/6/30.
 */

import * as THREE from 'three';
import { Glass } from './glass';

let Wall = (paintColor=0xffffff) => {
    let geometry = new THREE.CubeGeometry(10, 10, 1);
    let material = new THREE.MeshLambertMaterial({color: paintColor});
    let mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    return mesh
};

let GlassWall = (glassColor=0x000000, banColor=0x5cadff) => {
    let mesh = new THREE.Object3D();

    let glass = Glass(glassColor);

    mesh.add(glass);

    let banGeo = new THREE.CubeGeometry(10.01, 2.0, 0.6);
    let material = new THREE.MeshLambertMaterial({color: banColor, opacity: 0.8, transparent: true});
    let banMesh = new THREE.Mesh(banGeo, material);
    //banMesh.castShadow = true;

    let banMesh2 = new THREE.Mesh(banGeo, material);
    //banMesh2.castShadow = true;
    banMesh2.scale.y = 0.3;
    banMesh2.position.y = 2;

    mesh.add(banMesh);
    mesh.add(banMesh2);

    return mesh
};

export {Wall, GlassWall}