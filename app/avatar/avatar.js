"use client";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, { useEffect } from "react";

const Avatar = () => {
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      '/Josh-Avatar.glb', // Make sure the path is correct
      (gltf) => {
        setupScene(gltf);
        document.getElementById('avatar-loading').style.display = 'none';
      },
      (xhr) => {
        const percentCompletion = Math.round((xhr.loaded / xhr.total) * 100);
        document.getElementById('avatar-loading').innerText = `LOADING... ${percentCompletion}%`;
        console.log(`Loading model... ${percentCompletion}%`);
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );
  }, []);

  function setupScene(gltf) {
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const container = document.getElementById('avatar-container');
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45, container.clientWidth / container.clientHeight);
    camera.position.set(0.2, 0.5, 1);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minDistance = 3;
    controls.minPolarAngle = 1.4;
    controls.maxPolarAngle = 1.4;
    controls.target = new THREE.Vector3(0, 0.75, 0);
    controls.update();

    // Scene setup
    const scene = new THREE.Scene();

    // Lighting setup
    scene.add(new THREE.AmbientLight());

    const spotlight = new THREE.SpotLight(0xffffff, 20, 8, 1);
    spotlight.penumbra = 0.5;
    spotlight.position.set(0, 4, 2);
    spotlight.castShadow = true;
    scene.add(spotlight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2);
    keyLight.position.set(1, 1, 2);
    keyLight.lookAt(new THREE.Vector3());
    scene.add(keyLight);

    // Load avatar
    const avatar = gltf.scene;
    avatar.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    scene.add(avatar);

    // Create pedestal
    const groundGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.1, 64);
    const groundMaterial = new THREE.MeshStandardMaterial();
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.castShadow = false;
    groundMesh.receiveShadow = true;
    groundMesh.position.y -= 0.05;
    scene.add(groundMesh);

    // Load animations
    // ... (commented code for animation, if needed)

    // Handle resizing
    window.addEventListener('resize', () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });

    // Animation loop
    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      // mixer.update(clock.getDelta()); // Uncomment if using animations
      renderer.render(scene, camera);
    }
    animate();
  }

  return (
    <div
        id="avatar-container"
        className="flex justify-center items-center order-1 md:order-2 lg:max-w-[50vw] w-full "
    >
        <div id="avatar-loading">
        </div>
    </div>
  );
};

export default Avatar;
