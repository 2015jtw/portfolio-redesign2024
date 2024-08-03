"use client";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, { useEffect, useRef } from "react";

const Avatar = () => {
  const loadingRef = useRef(null);
  const containerRef = useRef(null); // Added ref for container

  useEffect(() => {
    const loader = new GLTFLoader();
    const container = containerRef.current; // Use containerRef

    if (!container) return; // Early return if container is not available

    let renderer, scene, camera, controls, mixer;

    const setupScene = (gltf) => {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);

      camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight);
      camera.position.set(0.2, 0.5, 1);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.minDistance = 3;
      controls.minPolarAngle = 1.4;
      controls.maxPolarAngle = 1.4;
      controls.target = new THREE.Vector3(0, 0.75, 0);
      controls.update();

      scene = new THREE.Scene();
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

      const avatar = gltf.scene;
      avatar.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      scene.add(avatar);

      const groundGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.1, 64);
      const groundMaterial = new THREE.MeshStandardMaterial();
      const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
      groundMesh.castShadow = false;
      groundMesh.receiveShadow = true;
      groundMesh.position.y -= 0.05;
      scene.add(groundMesh);

      mixer = new THREE.AnimationMixer(avatar);
      const clips = gltf.animations;
      const waveClip = THREE.AnimationClip.findByName(clips, 'Final-Waving');
      const waveAction = mixer.clipAction(waveClip);

      window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      });

      const clock = new THREE.Clock();
      function animate() {
        requestAnimationFrame(animate);
        mixer.update(clock.getDelta());
        renderer.render(scene, camera);
      }
      animate();
      waveAction.play();
    };

    loader.load(
      '/Josh-Avatar.glb',
      (gltf) => {
        setupScene(gltf);
        if (loadingRef.current) {
          loadingRef.current.style.display = 'none';
          console.log('Loading complete');
        }
      },
      (xhr) => {
        const percentCompletion = Math.round((xhr.loaded / xhr.total) * 100);
        if (loadingRef.current) {
          loadingRef.current.innerText = `LOADING... ${percentCompletion}%`;
        }
        console.log(`Loading model... ${percentCompletion}%`);
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    return () => {
      // Cleanup
      if (renderer) {
        renderer.dispose();
        if (container) {
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
        }
      }
      if (scene) {
        scene.dispose();
      }
      if (controls) {
        controls.dispose();
      }
      if (mixer) {
        mixer.stopAllAction();
      }
    };
  }, []);

  return (
    <div
      id="avatar-container"
      ref={containerRef} // Attach ref to container
      className="flex justify-center items-center order-1 lg:max-w-[50vw] w-full h-full min-h-[600px]"
    >
      <div id="avatar-loading" ref={loadingRef}>
        LOADING...
      </div>
    </div>
  );
};

export default Avatar;
