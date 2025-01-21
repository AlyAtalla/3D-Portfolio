import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF(isMobile ? "./desktop_pc_simple/scene.gltf" : "./desktop_pc/scene.gltf");

  useEffect(() => {
    // Traverse the scene and modify materials
    scene.traverse((child) => {
      if (child.isMesh) {
        console.log('Original Material:', child.material);
        
        // Check and replace existing materials as needed
        const currentMaterial = child.material;

        // Ensure the material is a standard type to apply changes
        if (currentMaterial && currentMaterial.isMeshStandardMaterial) {
          const newMaterial = currentMaterial.clone();
          newMaterial.color.setHSL(0.6, 1, 0.5); // Set a fixed color
          newMaterial.needsUpdate = true; // Ensure the material updates
          child.material = newMaterial;
          console.log('Updated Material:', child.material);
        }
      }
    });
  }, [scene]);

  return (
    <mesh>
      <primitive
        object={scene}
        scale={isMobile ? 2 : 2.5} // Increased scale to make the model bigger
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Check for WebGL support
    if (!window.WebGLRenderingContext) {
      setWebglSupported(false);
    } else {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (!webglSupported) {
    return <div>WebGL is not supported on this device.</div>;
  }

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false} // Disable zoom
          enableRotate={true} // Enable rotation
          enablePan={false} // Disable panning
          maxPolarAngle={Math.PI} // Allow full rotation around the center
          minPolarAngle={0} // Allow full rotation around the center
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;