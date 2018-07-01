/**
 * Created by yonghan on 2018/6/30.
 */

import * as THREE from 'three';
import boardTexture from '../../texture/board.jpg';


let board = (width, height, color=0xf5f5f5, hasPaint=true) =>{
    let board = new THREE.Object3D();

    let boardGeo = new THREE.CubeGeometry(width, height, 0.3);
    let boardMat = new THREE.MeshPhongMaterial({color: color,  specular: 0xffffff});
    let boardMesh = new THREE.Mesh(boardGeo, boardMat);
    boardMesh.receiveShadow = true;
    boardMesh.castShadow = true;

    let boardGapGeo = new THREE.CubeGeometry(width, 0.3, 0.1);
    let boardGapMat = new THREE.MeshPhongMaterial({color: 0xc0c0c0, specular: 0xffffff});
    let boardGap = new THREE.Mesh(boardGapGeo, boardGapMat);
    boardGap.rotation.x = 90 * Math.PI / 180;
    boardGap.position.y =  - height / 2;
    boardGap.position.z = 0.3;

    let frame = new THREE.CubeGeometry(width, 0.3, 0.35);
    let frameMat = new THREE.MeshBasicMaterial({color: 0xc0c0c0});
    let frameMesh = new THREE.Mesh(frame, frameMat);
    frameMesh.position.y = height / 2;
    frameMesh.receiveShadow = true;

    board.add(boardMesh);
    board.add(boardGap);
    board.add(frameMesh);

    if (hasPaint){
        let surfaceGeo = new THREE.PlaneGeometry(width - 0.3, height - 0.3, 1, 1);
        let texture = THREE.ImageUtils.loadTexture(boardTexture, null, (t)=>{});
        let surfaceMat = new THREE.MeshPhongMaterial({map: texture, specular: 0xffffff});
        let surface = new THREE.Mesh(surfaceGeo, surfaceMat);
        surface.position.z = 0.151;

        board.add(surface);
    }


    return board
};

let WallBoard = (width, height, color=0xf5f5f5) => {

    return board(width, height, color);
};

let StandBoard = (width, height, tall, color=0xf5f5f5) => {
    let board = new THREE.Object3D();

    return board
};


export {WallBoard, StandBoard}