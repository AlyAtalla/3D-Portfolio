import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const currentMaterial = child.material;

        if (currentMaterial && currentMaterial.isMeshStandardMaterial) {
          const newMaterial = currentMaterial.clone();
          newMaterial.color.setHSL(0.6, 1, 0.5);
          newMaterial.needsUpdate = true;
          child.material = newMaterial;
        }
      }
    });
  }, [scene]);

  return (
    <mesh>
      <primitive
        object={scene}
        scale={2.5}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const CreativeEffect = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
        color: "white",
        fontSize: "2rem",
        fontWeight: "bold",
        animation: "gradient-slide 5s ease infinite",
      }}
    >
      I'm Aly Atalla!
       Software Engineer
      Let's start our Creative journey
      <style>
        {`
          @keyframes gradient-slide {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
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
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      {!isMobile ? (
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
            <Computers />
          </Suspense>
          <Preload all />
        </Canvas>
      ) : (
        <CreativeEffect />
      )}
    </div>
  );
};

export default ComputersCanvas;
