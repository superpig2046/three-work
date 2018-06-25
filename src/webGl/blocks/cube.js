/**
 * Created by yonghan on 2018/6/24.
 */

import * as THREE from 'three';

class Cube{
    constructor (width, height, depth, color, x, y, z){
        let geometry = new THREE.CubeGeometry(width, height, depth);
        let material = new THREE.MeshLambertMaterial({color: color});

        this.mesh = new THREE.Mesh(geometry, material);

        this.mesh.position.set(x + width / 2, y + height / 2, z + depth / 2);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
    }
}

export default Cube