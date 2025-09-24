import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  try {
    const [decal] = useTexture([props.imgUrl]);

    return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color='#fff8eb'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      </Float>
    );
  } catch (error) {
    console.warn('Ball texture loading failed:', error);
    // Fallback: render a simple sphere without texture
    return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color='#915EFF'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
        </mesh>
      </Float>
    );
  }
};

const BallCanvas = ({ icon }) => {
  const [renderFailed, setRenderFailed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
      setRenderFailed(true);
    }

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (renderFailed) {
    // Fallback: render a 2D version
    return (
      <div className="w-full h-full flex items-center justify-center bg-tertiary rounded-full border border-secondary">
        <img 
          src={icon} 
          alt="tech"
          className="w-16 h-16 object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
    );
  }

  return (
    <Canvas
      frameloop={isMobile ? 'demand' : 'always'}
      dpr={[1, isMobile ? 1.5 : 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance',
        antialias: !isMobile,
        alpha: true
      }}
      onCreated={({ gl }) => {
        if (isMobile) {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        }
      }}
      onError={() => {
        console.warn('WebGL error occurred, falling back to 2D');
        setRenderFailed(true);
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableDamping={!isMobile}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
