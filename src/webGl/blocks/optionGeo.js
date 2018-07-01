/**
 * Created by yonghan on 2018/7/1.
 */

import * as THREE from 'three';
import {calculateNormals} from '../../utils/calculateNormals'

let optionGeo = (degrees=120)=>{

    let geometry = new THREE.BufferGeometry();

    let innerPoints = [];
    let outerPoints = [];

    let segment = 16;

    for (let i = 0; i < segment+1; i++){
        let innerX, innerY, outerX, outerY;

        let angel = degrees * Math.PI / 180 / segment * i;

        innerX = Math.cos(angel) * 10;
        innerY = Math.sin(angel) * 10;
        outerX = Math.cos(angel) * 11;
        outerY = Math.sin(angel) * 11;

        innerPoints.push([innerX, 1, innerY]);
        outerPoints.push([outerX, 1, outerY]);
    }

    let vertices = [];

    for (let i = 0; i< segment; i ++){
        vertices.push(...outerPoints[i+1]);
        vertices.push(...outerPoints[i]);
        vertices.push(...innerPoints[i]);

        vertices.push(...innerPoints[i]);
        vertices.push(...innerPoints[i+1]);
        vertices.push(...outerPoints[i+1]);

        // outer walls
        vertices.push(outerPoints[i+1][0], -1, outerPoints[i+1][2]);
        vertices.push(outerPoints[i][0], -1, outerPoints[i][2]);
        vertices.push(...outerPoints[i]);

        vertices.push(...outerPoints[i]);
        vertices.push(...outerPoints[i+1]);
        vertices.push(outerPoints[i+1][0], -1, outerPoints[i+1][2])
        
        //inner walls
        vertices.push(...innerPoints[i]);
        vertices.push(innerPoints[i][0], -1, innerPoints[i][2]);
        vertices.push(innerPoints[i+1][0], -1, innerPoints[i+1][2]);

        vertices.push(innerPoints[i+1][0], -1, innerPoints[i+1][2]);
        vertices.push(...innerPoints[i+1]);
        vertices.push(...innerPoints[i]);

    }

    vertices.push(...innerPoints[0]);
    vertices.push(...outerPoints[0]);
    vertices.push(outerPoints[0][0], -1, outerPoints[0][2]);

    vertices.push(...innerPoints[0]);
    vertices.push(outerPoints[0][0], -1, outerPoints[0][2]);
    vertices.push(innerPoints[0][0], -1, innerPoints[0][2]);

    vertices.push(outerPoints[segment][0], -1, outerPoints[segment][2]);
    vertices.push(...outerPoints[segment]);
    vertices.push(...innerPoints[segment]);


    vertices.push(innerPoints[segment][0], -1, innerPoints[segment][2]);
    vertices.push(outerPoints[segment][0], -1, outerPoints[segment][2]);
    vertices.push(...innerPoints[segment]);




    vertices = new Float32Array(vertices);


    let normals = calculateNormals(vertices, 3);


    geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.addAttribute('normal', new THREE.BufferAttribute(normals, 3));


    let material = new THREE.MeshLambertMaterial({color: 0x5cadff, flatShading: false});

    let mesh = new THREE.Mesh(geometry, material);
    mesh.scale.y = 3;

    return mesh
};

export {optionGeo}