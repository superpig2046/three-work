/**
 * Created by yonghan on 2018/7/8.
 */

import * as THREE from 'three';

import {BLOCK_WITH, BLOCK_HEIGHT, BLOCK_SIZE, DEG_90} from './var'

import * as BLOCK from './blocks'

let Foundation = () => {
    let geometry = new THREE.PlaneGeometry(BLOCK_WITH * BLOCK_SIZE, BLOCK_HEIGHT * BLOCK_SIZE);
    let material = new THREE.MeshLambertMaterial({color: 0xcccccc});
    let mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -0.5 * Math.PI;
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 0;
    return mesh
};


let FarmLand = () => {
    let farmLand = new THREE.Object3D();
    let foundation = Foundation();
    farmLand.add(foundation);

    // for (let i= 0; i< 10; i++){
    //     BLOCK.StraightRoad(`road-${i}`, farmLand, BLOCK_SIZE, DEG_90, 9, i);
    // }

    let roadPositions = [];
    let tRoadPositions = [];
    for (let i=0; i< 10; i++){
        if (i === 3){
            tRoadPositions.push([9, i])
        }else{
            roadPositions.push([9, i])
        }
    }

    BLOCK.StraightRoadBatch('road', farmLand, BLOCK_SIZE, 0, roadPositions);
    BLOCK.TRoadBatch('tRoad', farmLand, BLOCK_SIZE, 0, tRoadPositions);

    let grassLandPositions = [];
    let grassRoadPositions = [];

    for (let i=0; i< 10; i++){
        for (let j=0; j< 9; j++){
            if (i === 3){
                grassRoadPositions.push([j, i])
            }else{
                grassLandPositions.push([j, i])
            }

        }
    }

    BLOCK.PlaneGrass('grass', farmLand, BLOCK_SIZE, 0, grassLandPositions);
    BLOCK.GrassRoadBatch('grassRoad', farmLand, BLOCK_SIZE, DEG_90, grassRoadPositions);


    return farmLand

};

export {FarmLand}