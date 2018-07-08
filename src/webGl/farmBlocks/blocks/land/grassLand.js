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

import obj from '../../../../model/Grass/Grass.obj'
import mtl from '../../../../model/Grass/Grass.mtl'
import png from '../../../../model/Grass/Grass.png'

const PlaneGrass = (baseName, container, BLK_SIZE, rotate, positions) => {
    let mtLoader = new THREE.MTLLoader();
    mtLoader.setPath(OBJ_PATH);

    mtLoader.load('Grass.mtl', (material) => {
        material.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(material);
        loader.setPath(OBJ_PATH);
        loader.load('Grass.obj', (group) => {
            positions.forEach((pos, i) => {
                let tmpMesh = new BlockMesh(group.children[0].geometry, group.children[0].material, BLK_SIZE);
                tmpMesh.rotation.y = 90 * Math.PI / 180 * parseInt(10 * Math.random());
                tmpMesh.receiveShadow = true;
                tmpMesh.name = `${baseName}-${i}`;
                tmpMesh.position.x = calculatePosition(pos[0], pos[1])[0];
                tmpMesh.position.z = calculatePosition(pos[0], pos[1])[1];
                tmpMesh.name = `${baseName}-${pos[0]}-${pos[1]}`;
                container.add(tmpMesh);
            });

        })
    })
};

export {PlaneGrass}
