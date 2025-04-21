import React, { Suspense } from 'react';

// Components
import Room from '../components/room';
import Loader from '../components/room/loader';
import Sun from '../components/room/sun';

// Contexts
import UIContext from '../context/ui';

// Externals
import { CameraControls, Preload, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CameraControlsImpl from 'camera-controls';
import type { HeadFC, PageProps } from 'gatsby';

// Layouts
import Layout from '../layouts';

const IndexPage: React.FC<PageProps> = () => {
  const { sceneLoaded } = React.useContext(UIContext);

  return (
    <Layout>
      {sceneLoaded && (
        <Canvas
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] }}
          frameloop="demand"
          orthographic={true}
          shadows={true}
          style={{ position: 'absolute', zIndex: 100 }}
        >
          <Suspense fallback={null}>
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

            <Preload all={true} />

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

            <Sun />
          </Suspense>
        </Canvas>
      )}
      <Loader />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Pierre Maclot</title>;
