import * as THREE from 'three'
import Stats from 'stats-js'

import plotCubeOne from './chapter/cube1';


export default {
    name: 'web-gl',
    data(){
        return {
            scene: null,
            camera: null,
            renderer: null,
            light: null,
            states: null,
            controls: null
        }
    },
    methods: {
        initRender(){
            this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
            this.renderer.setSize(this.$el.clientWidth, this.$el.clientHeight);
            this.$el.appendChild(this.renderer.domElement);
            this.renderer.setClearColor(0xf8f8f9, 1.0);
            this.renderer.shadowMap.enabled = true;
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;


        },
        initCamera(perspective=true){
            if (perspective){
                this.camera = new THREE.PerspectiveCamera(45, this.$el.clientWidth / this.$el.clientHeight, 1, 10000);
                this.camera.position.x = 50;
                this.camera.position.y = 50;
                this.camera.position.z = 50;
                this.camera.up.x = 0;
                this.camera.up.y = 1;
                this.camera.up.z = 0;
                this.camera.lookAt(0,0,0);
            }else{
                console.log(this.$el.clientWidth, this.$el.clientHeight);
                let clientWidth = this.$el.clientWidth;
                let clientHeight = this.$el.clientHeight;

                this.camera = new THREE.OrthographicCamera(clientWidth / -2, clientWidth / 2,
                    clientHeight / 2, clientHeight / -2, 1, 1000);
                this.camera.position.y = 10;
                this.camera.lookAt(0,0,0);
            }
            this.scene.add(this.camera);



        },
        initScene(){
            this.scene = new THREE.Scene();

            let axes = new THREE.AxesHelper(100);
            this.scene.add(axes)

            this.scene.fog = new THREE.Fog(0xffffff, 0.015, 300)
        },
        initLight(){

        },
        initStats(){
            this.stats = new Stats();
            this.stats.domElement.style.position = 'absolute';
            this.stats.domElement.style.left = '0px';
            this.stats.domElement.style.top = '0px';
            this.$el.appendChild(this.stats.domElement);
        },
        init(){
            this.initRender();
            this.initScene();
            this.initCamera(true);
            this.initLight();
            this.initStats();

        },
        plotCube(){
            let geometry = new THREE.CubeGeometry(1,1,1);
            let material = new THREE.MeshBasicMaterial({color: 0x9ccc65});
            let cube = new THREE.Mesh(geometry, material);
            this.scene.add(cube);
            this.camera.position.z = 5;

            let render = () =>{
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                cube.rotation.z += 0.01;
                this.renderer.render(this.scene, this.camera);
                requestAnimationFrame(render);
                this.stats.update();
            };

            render();

            //this.renderer.render(this.scene, this.camera);
        },
        plotColorLine(){
            let geometry = new THREE.Geometry();
            let material = new THREE.LineBasicMaterial({vertexColors: true});
            let color1 = new THREE.Color(0xff7043), color2 = new THREE.Color(0x9ccc65);

            let p1 = new THREE.Vector3(-100, 0, 100);
            let p2 = new THREE.Vector3(100, 0, -100);

            geometry.vertices.push(p1);
            geometry.vertices.push(p2);
            geometry.colors.push(color1, color2);

            let line = new THREE.Line(geometry, material, THREE.LineSegments);
            this.scene.add(line)
        },
        plotGrid(){
            let geometry = new THREE.Geometry();
            geometry.vertices.push(new THREE.Vector3(-500, 0, 0));
            geometry.vertices.push(new THREE.Vector3(500, 0, 0));
            let material = new THREE.LineBasicMaterial({color: 0x000000, opacity: 0.2});

            for (let i=0; i <= 20; i ++ ){
                let line = new THREE.Line(geometry, material);
                line.position.z = (i * 50) - 500;
                this.scene.add(line);

                let yLine = new THREE.Line(geometry, material);
                yLine.position.x = (i * 50) - 500;
                yLine.rotation.y = 90 * Math.PI / 180;
                this.scene.add(yLine)
            }
        },
        draw(){
            this.renderer.clear();
            this.renderer.render(this.scene, this.camera);
        },
    },
    mounted(){
        this.init();
        plotCubeOne(this.renderer, this.scene, this.camera, this.stats, this.$el);
        //this.plotCube();
        //this.plotColorLine();
        //this.plotGrid();
        //this.draw()
    },
    render: function(h){
        return h('div', {style: {width: '100%', height: '600px'}})
    }
}