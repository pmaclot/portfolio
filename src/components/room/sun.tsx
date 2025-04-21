import React, { useRef } from 'react';

// Externals
import { useFrame, useThree } from '@react-three/fiber';
import { DirectionalLight } from 'three';

const Sun: React.FC = () => {
  const { camera } = useThree();

  const lightRef = useRef<DirectionalLight>(null);

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.set(-camera.rotation.z * (40 / Math.PI), 5, -10);
    }
  });

  return <directionalLight castShadow={true} color={0xffffff} intensity={5} ref={lightRef} rotation={[-2, -1, 0]} />;
};

export default Sun;
