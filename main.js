import * as THREE from "three";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import "./sb.min.css";
import "./style.css";

let HEIGHT = window.innerHeight;
let WIDTH = window.innerWidth;

const container = document.getElementById("container");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);

const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(1000, 1000, 1000);
scene.add(spotLight);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialiasing: false });
renderer.setSize(WIDTH, HEIGHT);
container.appendChild(renderer.domElement);

let block = undefined;

const objLoader = new OBJLoader();
objLoader.load("./teapot/teapot.obj", function (object) {
  object.traverse(function (node) {
    if (node.isMesh)
      node.material = new THREE.MeshPhongMaterial({ color: 0x0073ff });
  });
  object.position.y = -5;
  object.rotation.x = 0.4;
  object.scale.set(0.2, 0.2, 0.2);
  scene.add(object);
  block = object;
});

camera.position.z = 25;
camera.position.y = 0;

function render() {
  requestAnimationFrame(render);
  if (block) {
    block.rotation.y += 0.001;
  }
  renderer.render(scene, camera);
}
render();

window.addEventListener("resize", () => {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
