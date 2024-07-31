import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r132/three.module.js';
import { PathTracingRenderer } from './pathTracingRenderer/PathTracingRenderer.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Adjust width and height for desired output size
const renderer = new PathTracingRenderer({ width: 640, height: 480 });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a sphere to the scene (adjust material properties as needed)
const geometry = new THREE.SphereGeometry(1);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// (Optional) Add lighting for path tracing
// ...

// Start the animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();