/**
 * Created by yonghan on 2018/6/30.
 */

import * as THREE from 'three'
import {Glass} from './glass'

let Door = () => {
    let door = new THREE.Object3D();

    let doorGlass = Glass();
    door.add(doorGlass);

    let doorHandlerGeo = new THREE.CubeGeometry(0.6, 0.6, 1);
    let doorHandlerMaterial = new THREE.MeshLambertMaterial({color: 0x333333});
    let doorHandler = new THREE.Mesh(doorHandlerGeo, doorHandlerMaterial);

    doorHandler.position.x = 4;

    door.add(doorHandler);

    let doorContainer = new THREE.Object3D();
    doorContainer.add(door);
    doorContainer.position.x = 5;

    let doorObject = new THREE.Object3D();
    doorObject.add(doorContainer);
    doorObject.rotation.y = 30 * Math.PI / 180;

    return doorObject
};

export {Door}