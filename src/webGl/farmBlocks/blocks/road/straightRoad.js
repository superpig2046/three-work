/**
 * Created by yonghan on 2018/7/8.
 */

import * as THREEJS from 'three'
import OBJLoader from 'three-obj-loader'
import {MTLLoader} from '../../../../lib/MTLLoader'
import {OBJ_PATH} from '../../var'

const THREE = {...THREEJS, MTLLoader};

OBJLoader(THREE);

import BlockMesh from '../../../base/blockMesh'

import {calculatePosition} from '../../util'

import roadUrl from '../../../../model/Road/Road.obj'
import roadMtlUrl from '../../../../model/Road/Road.mtl'
import roadPng from '../../../../model/Road/Road.png'

import tRoadUrl from '../../../../model/Road/TRoad.obj'
import tRoadMtlUrl from '../../../../model/Road/TRoad.mtl'
import tRoadPng from '../../../../model/Road/TRoad.png'

import gRoadUrl from '../../../../model/Road/GrassRoad.obj'
import gRoadMtlUrl from '../../../../model/Road/GrassRoad.mtl'
import gRoadPng from '../../../../model/Road/GrassRoad.png'

const StraightRoad = (name, container, BLK_SIZE, rotate, idxC, idxR) => {
    let mtLoader = new THREE.MTLLoader();
    mtLoader.setPath(OBJ_PATH);

    mtLoader.load('Road.mtl', (material) => {
        material.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(material);
        loader.setPath(OBJ_PATH);
        loader.load('Road.obj', (group) => {
            //console.log('group', group);
            //console.log('>>>', group.children[0].geometry);
            //console.log('>>>', group.children[0].material);
            let mesh = new BlockMesh(group.children[0].geometry, group.children[0].material, BLK_SIZE);
            mesh.rotation.y = rotate;
            mesh.receiveShadow = true;
            mesh.position.x = calculatePosition(idxC, idxR)[0];
            mesh.position.z = calculatePosition(idxC, idxR)[1];
            container.add(mesh);
        })
    })
};

const StraightRoadBatch = (baseName, container, BLK_SIZE, rotate, positions) =>{
    let mtLoader = new THREE.MTLLoader();
    mtLoader.setPath(OBJ_PATH);

    mtLoader.load('Road.mtl', (material) => {
        material.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(material);
        loader.setPath(OBJ_PATH);
        loader.load('Road.obj', (group) => {
            positions.forEach((pos, i) => {
                let tmpMesh = new BlockMesh(group.children[0].geometry, group.children[0].material, BLK_SIZE);
                tmpMesh.rotation.y = rotate;
                tmpMesh.receiveShadow = true;
                tmpMesh.name = `${baseName}-${i}`;
                tmpMesh.position.x = calculatePosition(pos[0], pos[1])[0];
                tmpMesh.position.z = calculatePosition(pos[0], pos[1])[1];
                tmpMesh.name = `${baseName}-${i}`;
                container.add(tmpMesh);


            });


        })
    })
};

const TRoadBatch = (baseName, container, BLK_SIZE, rotate, positions) => {
    let mtLoader = new THREE.MTLLoader();
    mtLoader.setPath(OBJ_PATH);

    mtLoader.load('TRoad.mtl', (material) => {
        material.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(material);
        loader.setPath(OBJ_PATH);
        loader.load('TRoad.obj', (group) => {
            positions.forEach((pos, i) => {
                let tmpMesh = new BlockMesh(group.children[0].geometry, group.children[0].material, BLK_SIZE);
                tmpMesh.rotation.y = rotate;
                tmpMesh.receiveShadow = true;
                tmpMesh.name = `${baseName}-${i}`;
                tmpMesh.position.x = calculatePosition(pos[0], pos[1])[0];
                tmpMesh.position.z = calculatePosition(pos[0], pos[1])[1];
                tmpMesh.name = `${baseName}-${i}`;
                container.add(tmpMesh);


            });


        })
    })
};

const GrassRoadBatch = (baseName, container, BLK_SIZE, rotate, positions) => {
    let mtLoader = new THREE.MTLLoader();
    mtLoader.setPath(OBJ_PATH);

    mtLoader.load('GrassRoad.mtl', (material) => {
        material.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(material);
        loader.setPath(OBJ_PATH);
        loader.load('GrassRoad.obj', (group) => {
            positions.forEach((pos, i) => {
                let tmpMesh = new BlockMesh(group.children[0].geometry, group.children[0].material, BLK_SIZE);
                tmpMesh.rotation.y = rotate;
                tmpMesh.receiveShadow = true;
                tmpMesh.name = `${baseName}-${i}`;
                tmpMesh.position.x = calculatePosition(pos[0], pos[1])[0];
                tmpMesh.position.z = calculatePosition(pos[0], pos[1])[1];
                container.add(tmpMesh);


            });


        })
    })
};

export {StraightRoad, StraightRoadBatch, TRoadBatch, GrassRoadBatch}