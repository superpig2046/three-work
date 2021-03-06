/**
 * Created by yonghan on 2018/6/30.
 */

import * as THREEJS from 'three'
//import * as THREEADDONS from 'three-addons'
//import {OBJLoader} from '../../lib/OBJLoader'
import {MTLLoader} from '../../lib/MTLLoader'
import OBJLoader from 'three-obj-loader'
const THREE = {...THREEJS, MTLLoader};

OBJLoader(THREE);

//import MTLLoader from 'three-mtl-loader'
//import OBJMTLLoader from 'three-objmtll-loader'




//OBJLoader(THREE);
//MTLLoader(THREE);
//OBJMTLLoader(THREE);

import * as MATERIAL from '../material'

import {optionGeo} from '../blocks/optionGeo'

import roadUrl from '../../model/Road/Road.obj'
import roadMtlUrl from '../../model/Road/Road.mtl'
import roadPng from '../../model/Road/Road.png'

let addFloor = (room) => {
    let floorGeometry = new THREE.PlaneGeometry(60, 40);
    let floorMaterial = new THREE.MeshLambertMaterial({color: 0x1c2438});

    let floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = - 90 * Math.PI / 180;
    floor.receiveShadow = true;

    room.add(floor);
};

let addWall = (room) => {
    let color = new THREE.Color(0x5cadff);
    let hsl = color.getHSL();
    hsl.l = 0.95;
    let wallColor = new THREE.Color();
    wallColor.setHSL(hsl.h, hsl.s, hsl.l);

    let wall = MATERIAL.Wall(wallColor);
    wall.scale.y = 2;
    wall.scale.x = 6;
    wall.position.y = 10;
    wall.position.z = -20;
    room.add(wall);

    let leftWall = MATERIAL.Wall(wallColor);
    leftWall.scale.y = 2;
    leftWall.scale.x = 4;
    leftWall.rotation.y = 90 * Math.PI / 180;
    leftWall.position.y = 10;
    leftWall.position.x = -30 + 0.5;
    room.add(leftWall);

    let rightWall = MATERIAL.Wall(wallColor);
    rightWall.scale.y = 2;
    rightWall.scale.x = 4;
    rightWall.rotation.y = 90 * Math.PI / 180;
    rightWall.position.y = 10;
    rightWall.position.x = 30 - 0.5;
    room.add(rightWall);

    let door = MATERIAL.Door();
    door.scale.y = 2;
    door.position.y = 10;
    door.rotation.y += 120 * Math.PI / 180;
    door.position.z = 20;
    door.position.x = 29;
    room.add(door);

    let glassWall = MATERIAL.GlassWall();
    glassWall.scale.y = 2;
    glassWall.scale.x = 4.8;
    glassWall.position.y = 10;
    glassWall.position.x = -5;
    glassWall.position.z = 20;

    room.add(glassWall);
};

let addTelevision = (room) => {
    let television = MATERIAL.Television();
    television.scale.x = 1.5;
    television.scale.y = 1.5;
    television.rotation.y = 90 * Math.PI / 180;
    television.position.x = -30 + 1.5;
    television.position.y = 10;

    room.add(television);
};

let addDesk = (room) => {
    let meetingDesk = MATERIAL.BasicMeetingDesk(12, 34, 8);
    meetingDesk.rotation.y = 90 / 180 * Math.PI;

    room.add(meetingDesk);
};

let addWallBoard = (room) => {
    let board = MATERIAL.WallBoard(35, 10);
    board.rotation.y = - 90 * Math.PI / 180;
    board.position.y = 12;
    board.position.x = 30 - 1.2;

    room.add(board);
};

let addOption = (room) =>{

    room.add(optionGeo())
};

let addObj = (room) => {

    let mtLoader = new THREE.MTLLoader();
    mtLoader.setPath('static/model/');
    mtLoader.load('Road.mtl', (material) => {
        material.preload();
        //console.log('material', material);
        let loader = new THREE.OBJLoader();
        //console.log('>>> obj loader', loader);
        loader.setMaterials(material);
        loader.setPath('static/model/');
        loader.load('Road.obj', (group) => {
            //console.log('group', group);

            room.add(group);
        })
    })
};

let addObjOnly = (room) =>{
    let loader = new THREE.OBJLoader();
    loader.load(roadUrl, (group) => {
        //console.log('group', group);
        room.add(group);
    })
};


// let addObjMtl = (room) => {
//     let loader = new OBJMTLLoader();
//     loader.load(roadUrl, roadMtlUrl, (obj)=>{
//         console.log(obj);
//     })
//
// };

let Room = () => {
    let room = new THREE.Object3D();

    // addFloor(room);
    // addWall(room);
    // addTelevision(room);
    // addDesk(room);
    //
    // addWallBoard(room);

    //addOption(room);

    addObj(room);
    //addObjOnly(room);

    //addObjMtl(room);


    return room
};

export {Room}