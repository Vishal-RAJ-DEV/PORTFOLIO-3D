import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={isMobile ? 0.7 : 1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={isMobile ? 0.5 : 1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [renderFailed, setRenderFailed] = useState(false);
  const canvasRef = useRef();

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
      setRenderFailed(true);
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Performance monitoring to detect if 3D is causing issues
  useEffect(() => {
    if (isMobile) {
      let lowFPS = 0;
      let lastTime = performance.now();
      let frameCount = 0;

      const checkPerformance = () => {
        const now = performance.now();
        frameCount++;

        if (now - lastTime >= 1000) {
          const fps = frameCount * 1000 / (now - lastTime);

          if (fps < 20) {
            lowFPS++;
            if (lowFPS > 2) {
              setRenderFailed(true);
              return;
            }
          } else {
            lowFPS = Math.max(0, lowFPS - 1);
          }

          frameCount = 0;
          lastTime = now;
        }

        if (!renderFailed) {
          requestAnimationFrame(checkPerformance);
        }
      };

      requestAnimationFrame(checkPerformance);
    }
  }, [isMobile]);

  if (renderFailed) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-8 opacity-50">
            <img src="/logo.svg" alt="Logo" className="w-full h-full animate-pulse" />
          </div>
          <p className="text-secondary text-xl">Interactive 3D Experience</p>
          <p className="text-sm text-gray-400 mt-2">For best experience, view on desktop</p>
        </div>
      </div>
    );
  }

  return (
    <Canvas
      ref={canvasRef}
      frameloop={isMobile ? 'demand' : 'always'}
      shadows
      dpr={[1, isMobile ? 1.5 : 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance',
        antialias: !isMobile
      }}
      onCreated={({ gl }) => {
        if (isMobile) {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        }
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={!isMobile}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
