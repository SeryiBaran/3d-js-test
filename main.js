import * as THREE from 'three';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import './sb.min.css';
import './style.css';

let HEIGHT = window.innerHeight;
let WIDTH = window.innerWidth;

const container = document.getElementById('container');

const scene = new THREE.Scene();

scene.background = new THREE.TextureLoader().load(
  'https://seryibaran.github.io/uploads/images/pole-ivanchaya.jpg',
);

const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);

const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(0, 1000, 1000);
scene.add(spotLight);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(WIDTH, HEIGHT);
container.appendChild(renderer.domElement);

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(8, 2, 32, 100),
  new THREE.MeshPhongMaterial({ color: 0x242424 }),
);

scene.add(torus);

camera.position.z = 25;
camera.position.y = 0;

function render() {
  requestAnimationFrame(render);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;

  renderer.render(scene, camera);
}
render();

window.addEventListener('resize', () => {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
