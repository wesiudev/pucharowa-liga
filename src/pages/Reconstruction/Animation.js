//importing necessary libraries
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//creating component
export const Animation = () => {
  //creating refs for the canvas and camera
  const canvasRef = useRef(null);
  const wrapperRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  //using useEffect hook to set up animation
  useEffect(() => {
    setIsLoaded(true);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.lookAt(15, -5.75, 50);
    camera.position.set(5, 5, 0);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x000000, 0);
    const geometry = new THREE.SphereGeometry(3, 30, 30);
    const geometry2 = new THREE.SphereGeometry(6, 60, 60);
    const ambient = new THREE.HemisphereLight(0x111111, 0xffffff);
    geometry.overdraw = true;
    const ballMaterials = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(
        "https://raw.githubusercontent.com/jeromeetienne/threex.sportballs/master/images/Footballrealisticsmall.jpgf0067587-1f18-410c-8650-63532bd9370fLarge.jpg"
      ),
    });

    const ball1 = new THREE.Mesh(geometry, ballMaterials);
    const ball2 = new THREE.Mesh(geometry2, ballMaterials);

    scene.add(ball1);
    scene.add(ball2);
    scene.add(camera);
    scene.add(ambient);

    const controls = new OrbitControls(camera, canvasRef.current);
    camera.position.z = 40;
    controls.update();

    renderer.setSize(window.innerWidth, window.innerHeight);
    !isLoaded && canvasRef.current.appendChild(renderer.domElement);
    var clock = new THREE.Clock();
    var time = 0;
    var delta = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      delta = clock.getDelta();
      time += delta;
      ball1.rotation.x = time * 4;
      ball1.position.y = 5 + Math.abs(Math.sin(time * 3));
      ball1.position.z = 15;
      ball2.rotation.z += 0.005;
      ball2.rotation.x += 0.5;
      ball2.rotation.x = time;
      ball2.position.y = -8 + Math.abs(Math.sin(time * 3)) * 2;
      renderer.render(scene, camera);
    };
    !isLoaded && animate();
  }, []);

  //returning the canvas
  return (
    <>
      <div ref={canvasRef} />
    </>
  );
};
