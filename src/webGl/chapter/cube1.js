import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

import Cube from '../blocks/cube'
import {PhongCube} from "../blocks/cube";

import * as MATERIAL from '../material'
import * as HOUSE from '../house'


let createCube = (width, height, depth, color, x, y, z) => {
    let geometry = new THREE.CubeGeometry(width, height, depth);
    let material = new THREE.MeshLambertMaterial({color: color});
    let cube = new THREE.Mesh(geometry, material);
    cube.position.set(x + width / 2, y + height / 2, z + depth / 2);
    cube.castShadow = true;
    cube.receiveShadow = true;
    return cube
};

let createTransCube = (width, height, depth, color, x, y, z) => {
    let geometry = new THREE.CubeGeometry(width, height, depth);
    let material = new THREE.MeshBasicMaterial({color: color, opacity: 0.5, transparent: true});
    let cube = new THREE.Mesh(geometry, material);
    cube.position.set(x + width / 2, y + height / 2, z + depth / 2);
    cube.castShadow = true;
    cube.receiveShadow = true;
    return cube
};

let createPhongCube = (width, height, depth, color, x, y, z) => {
    let geometry = new THREE.CubeGeometry(width, height, depth);
    let material = new THREE.MeshPhongMaterial({color: color});
    let cube = new THREE.Mesh(geometry, material);
    cube.position.set(x + width / 2, y + height / 2, z + depth / 2);
    cube.castShadow = true;
    cube.receiveShadow = true;
    return cube
};

let createPlane = () => {
    let geometry = new THREE.PlaneGeometry(60, 120);
    let material = new THREE.MeshLambertMaterial({color: 0xcccccc});
    let plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = 0;
    plane.receiveShadow = true;
    return plane
};

let shadeDirectWithEvn = (scene, plane) =>{
    let envLight = new THREE.AmbientLight(0xFFFFFF, 0.3);
    scene.add(envLight);

    let directLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directLight.position.set(0, 30, -50);
    directLight.castShadow = true;
    directLight.target = plane;
    directLight.shadow.camera.near = 2;
    directLight.shadow.camera.far = 100;
    directLight.shadow.camera.left = -50;
    directLight.shadow.camera.right = 50;
    directLight.shadow.camera.top = 50;
    directLight.shadow.camera.bottom = -50;

    let directLightHelper = new THREE.CameraHelper(directLight.shadow.camera);

    scene.add(directLight);
    scene.add(directLightHelper);
};

let shadeHemiLight = (scene) => {
    //let light = new THREE.HemisphereLight(0xffffff, 0x333333, 0.5);
    //light.position.set(0, 30, 0);
    ////light.castShadow = true;
    //
    //scene.add(light);

    let envLight = new THREE.AmbientLight(0xFFFFFF, 0.3);
    scene.add(envLight);

    let target = new THREE.Object3D();
    target.position.set(0, 0, 0);

    let directLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directLight.position.set(10, 30, 50);
    directLight.castShadow = true;
    directLight.target = target;
    directLight.shadow.camera.near = 20;
    directLight.shadow.camera.far = 85;
    directLight.shadow.camera.left = -50;
    directLight.shadow.camera.right = 50;
    directLight.shadow.camera.top = 50;
    directLight.shadow.camera.bottom = -50;
    directLight.shadow.mapSize.width = 1024;
    directLight.shadow.mapSize.height = 1024;

    let directLightHelper = new THREE.CameraHelper(directLight.shadow.camera);

    scene.add(directLight);
    scene.add(directLightHelper);

};

let createSpotLight = (color) =>{
    let light = new THREE.SpotLight()
};


export default (renderer, scene, camera, stats, el) => {

    shadeHemiLight(scene);

    let room = HOUSE.Room();
    scene.add(room);

    //scene.add(edges);
    //scene.add(edges1);

    // mouse caster
    //let raycaster = new THREE.Raycaster();
    //let mousePoint = new THREE.Vector2();
    //
    //let handleMouseMove = (ev) =>{
    //    mousePoint.x = (ev.clientX / el.clientWidth) * 2 - 1;
    //    mousePoint.y = -(ev.clientY / el.clientHeight) * 2 + 1;
    //};

    // tween
    //new TWEEN.Tween(cube.position)
    //    .to({z: 0}, 3000).repeat(Infinity).start();

    //let parseOne = new TWEEN.Tween(camera.position)
    //    .to({x: 10, z: 0}, 5000);
    //parseOne.easing(TWEEN.Easing.Quadratic.InOut);
    //let parseTwo = new TWEEN.Tween(camera.position)
    //    .to({x: -2, z: -2}, 5000);
    //parseTwo.easing(TWEEN.Easing.Quadratic.InOut);
    //
    //parseOne.chain(parseTwo);
    //parseOne.start();

    //new TWEEN.Tween(cube.mesh.scale)
    //    .to({y: 2.0}, 3000).start();

    // render function
    let render = () => {
        //cube.rotation.x += 0.01;
        //cube.rotation.y += 0.01;
        //cube.rotation.z += 0.01;

        //raycaster.setFromCamera(mousePoint, camera);
        //let intersects = raycaster.intersectObjects(scene.children);
        //
        //intersects.forEach(item => {
        //    item.object.material.color.set(0xff0000);
        //});

        //camera.position.x += 0.05;

        //let timer = Date.now() * 0.0005;
        //camera.position.x = Math.cos(timer) * 50;
        //camera.position.z = Math.sin(timer) * 50;
        //camera.lookAt(0,0,0);



        renderer.render(scene, camera);
        requestAnimationFrame(render);
        stats.update();
        TWEEN.update();
    };

    //addEventListener('mousemove', handleMouseMove, false);

    render()
};

