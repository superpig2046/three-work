/**
 * Created by yonghan on 2018/7/8.
 */

import * as THREE from 'three'


class BlockMesh extends THREE.Mesh{
    constructor(geometry, material, BLK_SIZE){
        super(geometry, material);
        this.blkSize = BLK_SIZE;
        this.transScale();
    }

    transScale(){
        this.geometry.computeBoundingBox();
        let width = this.geometry.boundingBox.max.x  - this.geometry.boundingBox.min.x;

        let scaleRatio = this.blkSize / width;
        this.geometry.scale(scaleRatio, scaleRatio, scaleRatio)

    }
}

export default BlockMesh