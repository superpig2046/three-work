/**
 * Created by yonghan on 2018/6/24.
 */

import * as THREE from 'three';

class Cube{
    constructor (width, height, depth, color, x, y, z){
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.color = color;
        this.x = x;
        this.y = y;
        this.z = z;

        this.mesh = null;

        this.createMesh();

    }

    createMesh(){
        let geometry = new THREE.CubeGeometry(this.width, this.height, this.depth);
        let material = new THREE.MeshLambertMaterial({color: this.color});

        this.mesh = new THREE.Mesh(geometry, material);

        this.mesh.position.set(this.x + this.width / 2,
            this.y + this.height / 2, this.z + this.depth / 2);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
    }
}

class PhongCube extends Cube{
    createMesh(){
        let geometry = new THREE.CubeGeometry(this.width, this.height, this.depth);
        let material = new THREE.MeshPhongMaterial({color: this.color,
            specular: 0xffffff});

        this.mesh = new THREE.Mesh(geometry, material);

        this.mesh.position.set(this.x + this.width / 2,
            this.y + this.height / 2, this.z + this.depth / 2);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
    }
}

export default Cube
export {PhongCube}