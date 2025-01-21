import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // Load different models based on the device type
  const desktopScene = useGLTF("./desktop_pc/scene.gltf").scene;
  const mobileScene = useGLTF("./wings/scene.gltf").scene;

  // Select the appropriate scene
  const scene = isMobile ? mobileScene : desktopScene;

  useEffect(() => {
    // Traverse the scene and modify materials
    scene.traverse((child) => {
      if (child.isMesh) {
        const currentMaterial = child.material;

        if (currentMaterial && currentMaterial.isMeshStandardMaterial) {
          const newMaterial = currentMaterial.clone();
          newMaterial.color.setHSL(0.6, 1, 0.5); // Set a fixed color
          newMaterial.needsUpdate = true; // Ensure the material updates
          child.material = newMaterial;
        }
      }
    });
  }, [scene]);

  return (
    <mesh>
      <primitive
        object={scene}
        scale={isMobile ? 2 : 2.5}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          enablePan={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
