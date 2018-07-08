/**
 * Created by yonghan on 2018/7/8.
 */

import {BLOCK_WITH, BLOCK_SIZE, BLOCK_HEIGHT} from './var'

const calculatePosition = (c, r) => {
    let x, y;

    x =  - BLOCK_WITH / 2 * BLOCK_SIZE + c * BLOCK_SIZE + BLOCK_SIZE / 2;
    y =  - BLOCK_HEIGHT / 2 * BLOCK_SIZE + r * BLOCK_SIZE + BLOCK_SIZE / 2;


    return [x, y]
};

export {calculatePosition}