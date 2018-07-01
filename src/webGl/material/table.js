/**
 * Created by yonghan on 2018/6/30.
 */

import * as THREE from 'three'

let SimpleDesktop = (width, height) => {
    let geometry = new THREE.CubeGeometry(width, height, 0.3);
    let material = new THREE.MeshLambertMaterial({color: 0xeeeeee});
    let mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    mesh.rotation.x = 90 * Math.PI / 180;
    return mesh
};

let SimpleDeskTopBase = (width, height, tall) => {
    let base = new THREE.Object3D();

    let legGeo = new THREE.CylinderGeometry(0.1, 0.1, tall, 8);
    let legMat = new THREE.MeshBasicMaterial({color: 0x111111});


    [{w: width / 2 - 0.6, h: height / 2 - 0.6},
        {w: - width / 2 + 0.6, h: height / 2 - 0.6},
        {w: width / 2 - 0.6, h: - height / 2 + 0.6},
        {w: - width / 2 + 0.6, h: - height / 2 + 0.6}].forEach(v => {
        let legMesh = new THREE.Mesh(legGeo, legMat);
        legMesh.position.y = tall / 2;
        legMesh.position.x = v.w;
        legMesh.position.z = v.h;
        legMesh.castShadow = true;
        base.add(legMesh);
    });

    let legBarMat = new THREE.MeshBasicMaterial({color: 0x111111});

    [{w: width - 1.2, x: 0, z: height / 2 -0.6, y: 0},
        {w: width - 1.2, x: 0, z: - height / 2 +0.6, y: 0},
        {w: height - 1.2, x: width / 2 - 0.6, z: 0, y: 90 * Math.PI / 180},
        {w: height - 1.2, x: - width / 2 + 0.6, z: 0, y: 90 * Math.PI / 180}].forEach(v => {
        let legBarGeo = new THREE.CubeGeometry(v.w, 0.5, 0.2);
        let legBar = new THREE.Mesh(legBarGeo, legBarMat);
        legBar.position.y = tall * 3 / 4;
        legBar.position.z = v.z;
        legBar.position.x = v.x;
        legBar.rotation.y = v.y;
        base.add(legBar);
    });

    return base
};


let AdvancedDesktop = () => {

};

// 白色表面的粗略的会议桌
let BasicMeetingDesk = (width, height, tall) => {
    let table = new THREE.Object3D();

    let deskTop = SimpleDesktop(width, height);
    deskTop.position.y = tall;
    table.add(deskTop);

    let deskTopLegs = SimpleDeskTopBase(width, height, tall);

    table.add(deskTopLegs);


    return table
};


export { BasicMeetingDesk }