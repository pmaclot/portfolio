import React, { Suspense, useRef } from 'react';

// Components
import Room from '../components/room2';

// Externals
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { BakeShadows, CameraControls, Html, Stage, Stats, useProgress } from '@react-three/drei';
import CameraControlsImpl from 'camera-controls';
import type { HeadFC, PageProps } from 'gatsby';

// Layouts
import Layout from '../layouts';
import { DirectionalLight } from 'three';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Canvas
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] }}
        frameloop="demand"
        orthographic={true}
        shadows={true}
      >
        <Suspense fallback={<Loader />}>
          <Stage
            adjustCamera={false}
            environment={{
              background: false,
              backgroundBlurriness: 0,
              backgroundIntensity: 0.3,
              backgroundRotation: [0, Math.PI / 2, 0],
              environmentIntensity: 0.3,
              environmentRotation: [0, Math.PI / 2, 0],
              preset: 'apartment'
            }}
            shadows="contact"
          >
            <Room />
          </Stage>

          <CameraControls
            enabled={true}
            makeDefault={true}
            maxAzimuthAngle={Math.PI / 1.99999}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={0.00001}
            minPolarAngle={0}
            mouseButtons={{
              left: CameraControlsImpl.ACTION.ROTATE,
              middle: CameraControlsImpl.ACTION.NONE,
              right: CameraControlsImpl.ACTION.NONE,
              wheel: CameraControlsImpl.ACTION.ZOOM
            }}
            smoothTime={0.5}
            touches={{
              one: CameraControlsImpl.ACTION.TOUCH_ROTATE,
              two: CameraControlsImpl.ACTION.TOUCH_ZOOM,
              three: CameraControlsImpl.ACTION.NONE
            }}
          />

          <CameraDirectionalLight />
        </Suspense>
      </Canvas>
    </Layout>
  );
};

function CameraDirectionalLight() {
  const { camera } = useThree();

  const lightRef = useRef<DirectionalLight>(null);

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.set(-camera.rotation.z * (40 / Math.PI), 5, -10);
    }
  });

  return <directionalLight castShadow={true} color={0xffffff} intensity={5} ref={lightRef} rotation={[-2, -1, 0]} />;
}

function Loader() {
  const { progress } = useProgress();

  return <Html center={true}>{progress.toFixed(0)}% loaded</Html>;
}

export default IndexPage;

export const Head: HeadFC = () => <title>Pierre Maclot</title>;
