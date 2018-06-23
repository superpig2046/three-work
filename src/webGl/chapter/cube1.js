import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

export default (renderer, scene, camera, stats, el) => {
    let geometry = new THREE.CubeGeometry(1,1,1);
    let material = new THREE.MeshLambertMaterial({color: 0x9ccc65});
    let cube = new THREE.Mesh(geometry, material);
    //let edges = new THREE.EdgesHelper(cube, 0xffffff);

    let geometry1 = new THREE.CubeGeometry(2,1,1);
    let material1 = new THREE.MeshLambertMaterial({color: 0x9ccc65});
    let cube2 = new THREE.Mesh(geometry1, material1);
    cube2.position.set(1.5, 0, 1);
    //let edges1 = new THREE.EdgesHelper(cube2, 0xffffff);

    scene.add(cube);
    scene.add(cube2);

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
    let parseOne = new TWEEN.Tween(camera.position)
        .to({x: 10, z: 0}, 5000);
    parseOne.easing(TWEEN.Easing.Quadratic.InOut);
    let parseTwo = new TWEEN.Tween(camera.position)
        .to({x: -2, z: -2}, 5000);
    parseTwo.easing(TWEEN.Easing.Quadratic.InOut);

    parseOne.chain(parseTwo);
    parseOne.start();


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
        camera.lookAt(0,0,0);

        renderer.render(scene, camera);
        requestAnimationFrame(render);
        stats.update();
        TWEEN.update();
    };

    //addEventListener('mousemove', handleMouseMove, false);

    render()
};

