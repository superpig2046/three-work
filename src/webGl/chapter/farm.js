/**
 * Created by yonghan on 2018/7/8.
 */

import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

import * as FARM from '../farmBlocks'

let shadeHemiLight = (scene) => {
    let envLight = new THREE.AmbientLight(0xFFFFFF, 0.6);
    scene.add(envLight);

    let target = new THREE.Object3D();
    target.position.set(0, 0, 0);

    let directLight = new THREE.DirectionalLight(0xffffff, 1);
    directLight.position.set(20, 60, 100);
    directLight.castShadow = true;
    directLight.target = target;
    directLight.shadow.camera.near = 20;
    directLight.shadow.camera.far = 235;
    directLight.shadow.camera.left = -100;
    directLight.shadow.camera.right = 100;
    directLight.shadow.camera.top = 100;
    directLight.shadow.camera.bottom = -100;
    directLight.shadow.mapSize.width = 1024;
    directLight.shadow.mapSize.height = 1024;

    let directLightHelper = new THREE.CameraHelper(directLight.shadow.camera);

    scene.add(directLight);
    scene.add(directLightHelper);

};


export default (renderer, scene, camera, stats, el) => {
    shadeHemiLight(scene);

    let farm = FARM.FarmLand();
    scene.add(farm);

    let render = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(render);
        stats.update();
        TWEEN.update();
    };

    render()
}