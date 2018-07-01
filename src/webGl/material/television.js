/**
 * Created by yonghan on 2018/6/30.
 */

import * as THREE from 'three'
import imgUrl from '../../texture/television.jpeg'

let Television = () => {

    let television = new THREE.Object3D();

    let screenGeo = new THREE.PlaneGeometry(8.8, 4.3, 1, 1);
    let texture = THREE.ImageUtils.loadTexture(imgUrl, null, (t)=>{});
    let screenMat = new THREE.MeshBasicMaterial({map: texture});
    let screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.z = 0.401;
    screen.position.y = 2.85;

    let geometry = new THREE.CubeGeometry(9, 4.5, 0.8);
    let material = new THREE.MeshPhongMaterial({color: 0x000000, specular: 0xffffff});

    let baseGeo = new THREE.CubeGeometry(9, 0.5, 0.8);
    let baseMat = new THREE.MeshLambertMaterial({color: 0x555555});

    let mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = 2.75;
    mesh.castShadow = true;
    let baseMash = new THREE.Mesh(baseGeo, baseMat);
    baseMash.position.y = 0.25;

    let lightGeo = new THREE.CubeGeometry(0.2, 0.2, 0.82);
    let lightMat = new THREE.MeshLambertMaterial({color: 0x9ccc65, emissive: 0x9ccc65});
    let light = new THREE.Mesh(lightGeo, lightMat);
    light.position.y = 0.2;

    television.add(mesh);
    television.add(baseMash);
    television.add(light);

    television.add(screen);

    return television
};

export {Television}