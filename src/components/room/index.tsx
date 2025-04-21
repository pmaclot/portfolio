import React, { memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

// Externals
import { CameraControls, Outlines, useGLTF } from '@react-three/drei';
import { GroupProps, useFrame, useThree } from '@react-three/fiber';
import { Alert, Button, Flex, Paragraph, Text } from 'theme-ui';
import { Group, Mesh, MeshStandardMaterial } from 'three';
import { GLTF } from 'three-stdlib';
import randomColor from 'randomcolor';
import toast from 'react-hot-toast';
import { set } from 'lodash';

type GLTFResult = GLTF & {
  nodes: {
    Arm_Rest: Mesh;
    Arm_Rest_Cushiion: Mesh;
    Art: Mesh;
    Back_Grille: Mesh;
    Book: Mesh;
    Book_1: Mesh;
    Bulb: Mesh;
    Chair: Mesh;
    Chair_Legs: Mesh;
    Circle003: Mesh;
    Circle003_1: Mesh;
    Coffee: Mesh;
    Coffee_Cup: Mesh;
    Coffee_Table_1: Mesh;
    Coffee_Table_2: Mesh;
    Coffee_Table_Legs: Mesh;
    Cube002: Mesh;
    Cube002_1: Mesh;
    Cube002_2: Mesh;
    Cube002_3: Mesh;
    Cube002_4: Mesh;
    Cube002_5: Mesh;
    Cube002_6: Mesh;
    Desk: Mesh;
    Desk_Legs: Mesh;
    Dirt: Mesh;
    Display: Mesh;
    Drawers: Mesh;
    Handle: Mesh;
    Keyboard: Mesh;
    Keys: Mesh;
    Lamp: Mesh;
    Leaves: Mesh;
    Monitor: Mesh;
    Monitor_Screen: Mesh;
    Monitor_Stand: Mesh;
    Mouse: Mesh;
    Notebook_1: Mesh;
    Notebook_2: Mesh;
    Plane: Mesh;
    Plane_1: Mesh;
    Player000: Mesh;
    Player001: Mesh;
    Player002: Mesh;
    Player003: Mesh;
    Player005: Mesh;
    Player: Mesh;
    Player_Knob_1: Mesh;
    Player_Knob_2: Mesh;
    Player_Legs: Mesh;
    Record001: Mesh;
    Record002: Mesh;
    Record003: Mesh;
    Record004: Mesh;
    Record005: Mesh;
    Rims: Mesh;
    Rod: Mesh;
    Roundcube: Mesh;
    Roundcube001: Mesh;
    Roundcube002: Mesh;
    Shelves: Mesh;
    Sofa: Mesh;
    Sofa_Cushions: Mesh;
    Sofa_Legs: Mesh;
    Speakers: Mesh;
    Stereo_Table: Mesh;
    Stereo_Table_Legs: Mesh;
    Tire: Mesh;
    Tree: Mesh;
    Tree_Jar: Mesh;
    Windows: Mesh;
    Windows_Frames: Mesh;
  };
  materials: {
    ['Black']: MeshStandardMaterial;
    ['Blackout']: MeshStandardMaterial;
    ['Book']: MeshStandardMaterial;
    ['Bulb']: MeshStandardMaterial;
    ['Carpaint']: MeshStandardMaterial;
    ['Chrome']: MeshStandardMaterial;
    ['Coffee']: MeshStandardMaterial;
    ['Dirt']: MeshStandardMaterial;
    ['Floor']: MeshStandardMaterial;
    ['FrontLight']: MeshStandardMaterial;
    ['Jar']: MeshStandardMaterial;
    ['Keys']: MeshStandardMaterial;
    ['Leaves']: MeshStandardMaterial;
    ['Metal']: MeshStandardMaterial;
    ['Pages']: MeshStandardMaterial;
    ['Plant']: MeshStandardMaterial;
    ['Poster']: MeshStandardMaterial;
    ['RearLight']: MeshStandardMaterial;
    ['SideLight']: MeshStandardMaterial;
    ['Sofa']: MeshStandardMaterial;
    ['Steel']: MeshStandardMaterial;
    ['Stump']: MeshStandardMaterial;
    ['Tire']: MeshStandardMaterial;
    ['White']: MeshStandardMaterial;
    ['Windows']: MeshStandardMaterial;
    ['Windows.001']: MeshStandardMaterial;
    ['Wood Dark']: MeshStandardMaterial;
    ['Wood']: MeshStandardMaterial;
  };
};

const Room: React.FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF('/models/room.glb') as GLTFResult;
  const { controls } = useThree();

  // This is used for camera transitions
  const modelGroupRef = useRef<Group>(null!);
  const monitorGroupRef = useRef<Group>(null!);
  const stereoGroupRef = useRef<Group>(null!);

  const [outlineOpacity, setOutlineOpacity] = useState<number>(1);
  const [tutorialStep, setTutorialStep] = useState<'WELCOME' | 'OBJECTS' | 'EASTER_EGG'>('WELCOME');

  const cameraToModel = useCallback(async (): Promise<void> => {
    if (!controls) return;

    // Resetting the controls, since it's not possible to 'lock' temporarily the camera
    (controls as unknown as CameraControls).minAzimuthAngle = 0.00001;
    (controls as unknown as CameraControls).maxAzimuthAngle = Math.PI / 1.99999;
    (controls as unknown as CameraControls).minPolarAngle = 0;
    (controls as unknown as CameraControls).maxPolarAngle = Math.PI / 2;

    // Resetting the camera
    await Promise.all([
      (controls as unknown as CameraControls).rotateAzimuthTo(Math.PI / 4, false),
      (controls as unknown as CameraControls).rotatePolarTo(Math.PI / 2.6, false),
      (controls as unknown as CameraControls).fitToSphere(modelGroupRef.current, true)
    ]);
  }, [controls]);

  const books = useMemo<React.ReactNode>(() => {
    console.log('rendering books');

    const booksMaterial = Array.from(
      { length: 17 },
      () =>
        new MeshStandardMaterial({
          color: randomColor({ luminosity: 'light' }),
          roughness: 0.5,
          metalness: 0.3
        })
    );

    return (
      <group>
        <group position={[-3.721, 3.031, -1.775]} rotation={[0, 1.571, 0]} scale={[1.16, 1.044, 1.363]}>
          <mesh castShadow={true} geometry={nodes.Book.geometry} material={booksMaterial[0]} receiveShadow={true} />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.711, 3.031, -1.729]} rotation={[0, 1.571, 0]} scale={[1.16, 1.173, 1.363]}>
          <mesh castShadow={true} geometry={nodes.Book.geometry} material={booksMaterial[1]} receiveShadow={true} />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.721, 3.031, -1.653]} rotation={[0, 1.571, 0]} scale={[1.903, 1.347, 1.363]}>
          <mesh castShadow={true} geometry={nodes.Book.geometry} material={booksMaterial[2]} receiveShadow={true} />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.738, 3.031, -1.552]} rotation={[0, 1.571, 0]} scale={[2.647, 1.387, 1.363]}>
          <mesh castShadow={true} geometry={nodes.Book.geometry} material={booksMaterial[3]} receiveShadow={true} />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.721, 3.031, -1.507]} rotation={[0, 1.571, 0]} scale={[1.16, 1.255, 1.363]}>
          <mesh castShadow={true} geometry={nodes.Book.geometry} material={booksMaterial[4]} receiveShadow={true} />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.705, 3.031, -1.46]} rotation={[0, 1.571, 0]} scale={[1.16, 1.044, 1.363]}>
          <mesh castShadow={true} geometry={nodes.Book.geometry} material={booksMaterial[5]} receiveShadow={true} />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.721, 3.031, -1.414]} rotation={[0, 1.571, 0]} scale={[1.16, 1.173, 1.363]}>
          <mesh castShadow={true} geometry={nodes.Book.geometry} material={booksMaterial[6]} receiveShadow={true} />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.749, 3.031, -1.338]} rotation={[0, 1.571, 0]} scale={[1.903, 1.106, 1.363]}>
          <mesh castShadow={true} geometry={nodes.Book.geometry} material={booksMaterial[7]} receiveShadow={true} />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.721, 3.031, -1.285]} rotation={[0, 1.571, 0]} scale={[1.363, 1.221, 1.363]}>
          <mesh castShadow={true} geometry={nodes.Book.geometry} material={booksMaterial[8]} receiveShadow={true} />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.721, 3.031, -1.238]} rotation={[0, 1.571, 0]} scale={[1.16, 1.165, 1.363]}>
          <mesh castShadow={true} geometry={nodes.Book.geometry} material={booksMaterial[9]} receiveShadow={true} />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.711, 3.031, -1.191]} rotation={[0, 1.571, 0]} scale={[1.16, 1.31, 1.363]}>
          <mesh castShadow={true} geometry={nodes.Book.geometry} material={booksMaterial[10]} receiveShadow={true} />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.721, 3.031, -1.115]} rotation={[0, 1.571, 0]} scale={[1.903, 1.235, 1.363]}>
          <mesh castShadow={true} geometry={nodes.Book.geometry} material={booksMaterial[11]} receiveShadow={true} />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.738, 3.031, -1.014]} rotation={[0, 1.571, 0]} scale={[2.647, 1.272, 1.363]}>
          <mesh castShadow={true} geometry={nodes.Book.geometry} material={booksMaterial[12]} receiveShadow={true} />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.721, 3.031, -0.969]} rotation={[0, 1.571, 0]} scale={[1.16, 1.402, 1.363]}>
          <mesh castShadow={true} geometry={nodes.Book.geometry} material={booksMaterial[13]} receiveShadow={true} />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.705, 3.031, -0.923]} rotation={[0, 1.571, 0]} scale={[1.16, 1.165, 1.363]}>
          <mesh castShadow={true} geometry={nodes.Book.geometry} material={booksMaterial[14]} receiveShadow={true} />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.721, 3.031, -0.876]} rotation={[0, 1.571, 0]} scale={[1.16, 1.31, 1.363]}>
          <mesh castShadow={true} geometry={nodes.Book.geometry} material={booksMaterial[15]} receiveShadow={true} />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.749, 3.031, -0.8]} rotation={[0, 1.571, 0]} scale={[1.903, 1.235, 1.363]}>
          <mesh castShadow={true} geometry={nodes.Book.geometry} material={booksMaterial[16]} receiveShadow={true} />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
      </group>
    );
  }, [materials, nodes.Book.geometry, nodes.Book_1.geometry]);

  const monitor = useMemo<React.ReactNode>(() => {
    console.log('rendering monitor');

    return (
      <mesh
        castShadow={true}
        geometry={nodes.Monitor.geometry}
        material={materials.Steel}
        onClick={() => console.log('Monitor clicked!')}
        position={[0.012, 1.719, -3.171]}
        receiveShadow={true}
        scale={1.129}
      >
        <mesh castShadow={true} geometry={nodes.Display.geometry} material={materials.Coffee} receiveShadow={true} />
        <mesh
          castShadow={true}
          geometry={nodes.Monitor_Screen.geometry}
          material={materials.Steel}
          receiveShadow={true}
        />
        <mesh
          castShadow={true}
          geometry={nodes.Monitor_Stand.geometry}
          material={materials.Steel}
          receiveShadow={true}
        />
        {tutorialStep === 'OBJECTS' && (
          <Outlines color="yellow" opacity={outlineOpacity} screenspace={true} transparent={true} />
        )}
      </mesh>
    );
  }, [
    materials,
    nodes.Display.geometry,
    nodes.Monitor.geometry,
    nodes.Monitor_Screen.geometry,
    nodes.Monitor_Stand.geometry,
    outlineOpacity,
    tutorialStep
  ]);

  const porsche = useMemo<React.ReactNode>(() => {
    console.log('rendering porsche');

    const porscheMaterial = new MeshStandardMaterial({
      color: randomColor({ luminosity: 'random' }),
      roughness: 0.5,
      metalness: 0.3
    });

    return (
      <group position={[-3.606, 3.93, -2.644]} scale={0.2}>
        <mesh castShadow={true} geometry={nodes.Cube002.geometry} material={porscheMaterial} receiveShadow={true} />
        <mesh
          castShadow={true}
          geometry={nodes.Cube002_1.geometry}
          material={materials.Blackout}
          receiveShadow={true}
        />
        <mesh
          castShadow={true}
          geometry={nodes.Cube002_2.geometry}
          material={materials['Windows.001']}
          receiveShadow={true}
        />
        <mesh
          castShadow={true}
          geometry={nodes.Cube002_3.geometry}
          material={materials.FrontLight}
          receiveShadow={true}
        />
        <mesh
          castShadow={true}
          geometry={nodes.Cube002_4.geometry}
          material={materials.RearLight}
          receiveShadow={true}
        />
        <mesh
          castShadow={true}
          geometry={nodes.Cube002_5.geometry}
          material={materials.SideLight}
          receiveShadow={true}
        />
        <mesh castShadow={true} geometry={nodes.Cube002_6.geometry} material={materials.Chrome} receiveShadow={true} />
        <mesh
          castShadow={true}
          geometry={nodes.Back_Grille.geometry}
          material={materials.Blackout}
          receiveShadow={true}
        />
        <mesh castShadow={true} geometry={nodes.Rims.geometry} material={materials.Metal} receiveShadow={true} />
        <mesh castShadow={true} geometry={nodes.Tire.geometry} material={materials.Tire} receiveShadow={true} />
      </group>
    );
  }, [
    materials,
    nodes.Back_Grille.geometry,
    nodes.Cube002.geometry,
    nodes.Cube002_1.geometry,
    nodes.Cube002_2.geometry,
    nodes.Cube002_3.geometry,
    nodes.Cube002_4.geometry,
    nodes.Cube002_5.geometry,
    nodes.Cube002_6.geometry,
    nodes.Rims.geometry,
    nodes.Tire.geometry
  ]);

  const stereo = useMemo<React.ReactNode>(() => {
    console.log('rendering stereo');

    return (
      <group onClick={() => console.log('Stereo clicked!')}>
        <mesh
          castShadow={true}
          geometry={nodes.Stereo_Table.geometry}
          material={materials['Wood Dark']}
          position={[3.354, 0, 1.012]}
          receiveShadow={true}
        >
          <mesh
            castShadow={true}
            geometry={nodes.Stereo_Table_Legs.geometry}
            material={materials['Wood Dark']}
            receiveShadow={true}
          />
          {tutorialStep === 'OBJECTS' && (
            <Outlines color="yellow" opacity={outlineOpacity} screenspace={true} transparent={true} />
          )}
        </mesh>
        <mesh
          castShadow={true}
          geometry={nodes.Player.geometry}
          material={materials.Wood}
          position={[3.35, 0.561, 1.017]}
          receiveShadow={true}
        >
          <mesh
            castShadow={true}
            geometry={nodes.Player_Knob_1.geometry}
            material={materials.Black}
            position={[-0.304, 0.118, 0.393]}
            receiveShadow={true}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Player_Knob_2.geometry}
            material={materials.Black}
            position={[-0.304, 0.118, 0.484]}
            receiveShadow={true}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Player_Legs.geometry}
            material={materials.Steel}
            receiveShadow={true}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Player000.geometry}
            material={materials.Steel}
            position={[0.122, 0.176, 0.404]}
            receiveShadow={true}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Player001.geometry}
            material={materials.Steel}
            position={[0, 0.118, 0]}
            receiveShadow={true}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Player002.geometry}
            material={materials.Steel}
            position={[0.135, 0.118, 0.404]}
            receiveShadow={true}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Player003.geometry}
            material={materials.Steel}
            position={[0.197, 0.16, 0.404]}
            receiveShadow={true}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Player005.geometry}
            material={materials.Steel}
            position={[-0.262, 0.176, 0.341]}
            receiveShadow={true}
            rotation={[0, -0.369, 0]}
          />
          <group position={[0, 0.149, 0]}>
            <mesh
              castShadow={true}
              geometry={nodes.Circle003.geometry}
              material={materials.Black}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Circle003_1.geometry}
              material={materials.White}
              receiveShadow={true}
            />
          </group>
        </mesh>
        <mesh
          castShadow={true}
          geometry={nodes.Speakers.geometry}
          material={materials.Keys}
          position={[3.354, 0, 1.012]}
          receiveShadow={true}
        />
        <group>
          <mesh
            castShadow={true}
            geometry={nodes.Record001.geometry}
            material={materials.Keys}
            position={[3.418, 0.92, -0.943]}
            receiveShadow={true}
            rotation={[1.159, 0, 0]}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Record002.geometry}
            material={materials.Keys}
            position={[3.325, 0.92, -0.928]}
            receiveShadow={true}
            rotation={[1.159, 0, 0]}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Record003.geometry}
            material={materials.Keys}
            position={[3.366, 0.903, -0.881]}
            receiveShadow={true}
            rotation={[1.092, 0, 0]}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Record004.geometry}
            material={materials.Keys}
            position={[3.318, 0.901, -0.862]}
            receiveShadow={true}
            rotation={[1.092, 0, 0]}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Record005.geometry}
            material={materials.Keys}
            position={[3.366, 0.892, -0.801]}
            receiveShadow={true}
            rotation={[0.998, 0, 0]}
          />
        </group>
      </group>
    );
  }, [
    materials,
    nodes.Circle003.geometry,
    nodes.Circle003_1.geometry,
    nodes.Player.geometry,
    nodes.Player000.geometry,
    nodes.Player001.geometry,
    nodes.Player002.geometry,
    nodes.Player003.geometry,
    nodes.Player005.geometry,
    nodes.Player_Knob_1.geometry,
    nodes.Player_Knob_2.geometry,
    nodes.Player_Legs.geometry,
    nodes.Record001.geometry,
    nodes.Record002.geometry,
    nodes.Record003.geometry,
    nodes.Record004.geometry,
    nodes.Record005.geometry,
    nodes.Speakers.geometry,
    nodes.Stereo_Table.geometry,
    nodes.Stereo_Table_Legs.geometry,
    outlineOpacity,
    tutorialStep
  ]);

  const room = useMemo<React.ReactNode>(() => {
    console.log('rendering room');

    return (
      <>
        {/* Windows */}
        <mesh castShadow={false} geometry={nodes.Windows.geometry} material={materials.Windows} receiveShadow={true} />
        {/* Windows Frames */}
        <mesh
          castShadow={true}
          geometry={nodes.Windows_Frames.geometry}
          material={materials.Wood}
          receiveShadow={true}
        />
        {/* Desk */}
        <mesh
          castShadow={true}
          geometry={nodes.Desk.geometry}
          material={materials.Wood}
          position={[0, 0, -3.067]}
          receiveShadow={true}
        >
          <mesh castShadow={true} geometry={nodes.Desk_Legs.geometry} material={materials.Steel} receiveShadow={true} />
          <mesh
            castShadow={true}
            geometry={nodes.Drawers.geometry}
            material={materials.Wood}
            position={[-1.2, 1.563, 0.8]}
            receiveShadow={true}
          >
            <mesh
              castShadow={true}
              geometry={nodes.Roundcube.geometry}
              material={materials.Steel}
              position={[0, 0, 0.053]}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Roundcube001.geometry}
              material={materials.Steel}
              position={[1.19, 0, 0.053]}
              receiveShadow={true}
            />
            <mesh
              castShadow={true}
              geometry={nodes.Roundcube002.geometry}
              material={materials.Steel}
              position={[2.405, 0, 0.053]}
              receiveShadow={true}
            />
          </mesh>
        </mesh>
        {/* Shelves */}
        <mesh
          castShadow={true}
          geometry={nodes.Shelves.geometry}
          material={materials.Wood}
          position={[-4, 0, -1.988]}
          receiveShadow={true}
        />
        {/* Sofa */}
        <mesh
          castShadow={true}
          geometry={nodes.Sofa.geometry}
          material={materials.Sofa}
          position={[-2.73, 0, 1.307]}
          receiveShadow={true}
        >
          <mesh
            castShadow={true}
            geometry={nodes.Sofa_Cushions.geometry}
            material={materials.Sofa}
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Sofa_Legs.geometry} material={materials.Steel} receiveShadow={true} />
        </mesh>
        {/* Chair */}
        <mesh
          castShadow={true}
          geometry={nodes.Chair.geometry}
          material={materials.Sofa}
          position={[0, 0, -0.876]}
          receiveShadow={true}
          scale={1.055}
        >
          <mesh castShadow={true} geometry={nodes.Arm_Rest.geometry} material={materials.Steel} receiveShadow={true} />
          <mesh
            castShadow={true}
            geometry={nodes.Arm_Rest_Cushiion.geometry}
            material={materials.Sofa}
            receiveShadow={true}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Chair_Legs.geometry}
            material={materials.Steel}
            receiveShadow={true}
          />
        </mesh>
        {/* Tree */}
        <mesh
          castShadow={true}
          geometry={nodes.Tree_Jar.geometry}
          material={materials.Jar}
          position={[3.1, 0, -2.839]}
          receiveShadow={true}
          rotation={[0, -0.336, 0]}
          scale={0.893}
        >
          <mesh castShadow={true} geometry={nodes.Dirt.geometry} material={materials.Dirt} receiveShadow={true} />
          <mesh
            castShadow={true}
            geometry={nodes.Tree.geometry}
            material={materials.Plant}
            receiveShadow={true}
            scale={0.599}
          >
            <mesh castShadow={true} geometry={nodes.Leaves.geometry} material={materials.Leaves} receiveShadow={true} />
          </mesh>
        </mesh>
        {/* Coffee Table */}
        <group position={[0.07, 0, 1.989]}>
          <mesh
            castShadow={true}
            geometry={nodes.Coffee_Table_1.geometry}
            material={materials['Wood Dark']}
            receiveShadow={true}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Coffee_Table_2.geometry}
            material={materials.Stump}
            receiveShadow={true}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Coffee_Table_Legs.geometry}
            material={materials.Steel}
            receiveShadow={true}
          />
        </group>
        {/* Coffee Cup */}
        <mesh
          castShadow={true}
          geometry={nodes.Coffee_Cup.geometry}
          material={materials.Jar}
          position={[-0.866, 1.719, -2.822]}
          receiveShadow={true}
          rotation={[0, 0.576, 0]}
          scale={0.137}
        >
          <mesh
            castShadow={true}
            geometry={nodes.Handle.geometry}
            material={nodes.Handle.material}
            position={[-0.003, 0, 0]}
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Coffee.geometry} material={materials.Coffee} receiveShadow={true} />
        </mesh>
        {/* Keyboard */}
        <mesh
          castShadow={true}
          geometry={nodes.Keyboard.geometry}
          material={materials.Steel}
          position={[0.001, 1.719, -2.561]}
          receiveShadow={true}
          rotation={[0.001, 0, 0]}
          scale={1.088}
        >
          <mesh
            castShadow={true}
            geometry={nodes.Keys.geometry}
            material={materials.Keys}
            receiveShadow={true}
            rotation={[0.084, 0, 0]}
          />
        </mesh>
        {/* Lamp */}
        <mesh
          castShadow={true}
          geometry={nodes.Lamp.geometry}
          material={materials.Jar}
          position={[-1.41, 1.719, -3.394]}
          receiveShadow={true}
          rotation={[-1.571, 1.57, 1.57]}
          scale={0.877}
        >
          <mesh
            castShadow={true}
            geometry={nodes.Bulb.geometry}
            material={materials.Bulb}
            position={[-0.001, 1.023, 0.187]}
            receiveShadow={true}
            scale={1.246}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Rod.geometry}
            material={materials.Jar}
            position={[0, 0.292, 0]}
            receiveShadow={true}
          />
        </mesh>
        {/* Mouse */}
        <mesh
          castShadow={true}
          geometry={nodes.Mouse.geometry}
          material={materials.Jar}
          position={[0.717, 1.719, -2.615]}
          receiveShadow={true}
          rotation={[0.001, 0.325, 0]}
          scale={1.079}
        />
        {/* Notebook */}
        <group position={[1.075, 1.719, -3.139]} rotation={[0, -1.105, 1.571]} scale={1.556}>
          <mesh castShadow={true} geometry={nodes.Notebook_1.geometry} material={materials.Keys} receiveShadow={true} />
          <mesh
            castShadow={true}
            geometry={nodes.Notebook_2.geometry}
            material={materials.White}
            receiveShadow={true}
          />
        </group>
        {/* Poster */}
        <mesh
          castShadow={true}
          geometry={nodes.Art.geometry}
          material={materials.Poster}
          position={[-4, 3.28, 1.97]}
          receiveShadow={true}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={1.889}
        />
        {/* Wall */}
        <mesh castShadow={true} geometry={nodes.Plane.geometry} material={materials.White} receiveShadow={true} />
        {/* Floor */}
        <mesh castShadow={true} geometry={nodes.Plane_1.geometry} material={materials.Floor} receiveShadow={true} />
      </>
    );
  }, [
    materials,
    nodes.Arm_Rest.geometry,
    nodes.Arm_Rest_Cushiion.geometry,
    nodes.Art.geometry,
    nodes.Bulb.geometry,
    nodes.Chair.geometry,
    nodes.Chair_Legs.geometry,
    nodes.Coffee.geometry,
    nodes.Coffee_Cup.geometry,
    nodes.Coffee_Table_1.geometry,
    nodes.Coffee_Table_2.geometry,
    nodes.Coffee_Table_Legs.geometry,
    nodes.Desk.geometry,
    nodes.Desk_Legs.geometry,
    nodes.Dirt.geometry,
    nodes.Drawers.geometry,
    nodes.Handle.geometry,
    nodes.Handle.material,
    nodes.Keyboard.geometry,
    nodes.Keys.geometry,
    nodes.Lamp.geometry,
    nodes.Leaves.geometry,
    nodes.Mouse.geometry,
    nodes.Notebook_1.geometry,
    nodes.Notebook_2.geometry,
    nodes.Plane.geometry,
    nodes.Plane_1.geometry,
    nodes.Rod.geometry,
    nodes.Roundcube.geometry,
    nodes.Roundcube001.geometry,
    nodes.Roundcube002.geometry,
    nodes.Shelves.geometry,
    nodes.Sofa.geometry,
    nodes.Sofa_Cushions.geometry,
    nodes.Sofa_Legs.geometry,
    nodes.Tree.geometry,
    nodes.Tree_Jar.geometry,
    nodes.Windows.geometry,
    nodes.Windows_Frames.geometry
  ]);

  useEffect(() => {
    if (global.localStorage && !global.localStorage.getItem('TUTORIAL')) {
      switch (tutorialStep) {
        case 'WELCOME':
          toast(
            (t) => (
              <Alert key={t.id} sx={{ margin: '-8px -10px' }} variant="accent">
                <Flex sx={{ flexDirection: 'column' }}>
                  <Paragraph sx={{ mb: 1 }}>Hi there! 👋</Paragraph>
                  <Paragraph>
                    Welcome to my website. To get started, here are some tips to help you find your way around.
                  </Paragraph>
                  <Button
                    onClick={(el) => {
                      el.currentTarget.disabled = true;

                      setTutorialStep('OBJECTS');

                      toast.dismiss(t.id);
                    }}
                    sx={{ my: 2, px: 2, py: 1, alignSelf: 'flex-end' }}
                    variant="white"
                  >
                    Next
                  </Button>
                </Flex>
              </Alert>
            ),
            {
              duration: Infinity
            }
          );
          break;
        case 'OBJECTS':
          toast(
            (t) => (
              <Alert key={t.id} sx={{ margin: '-8px -10px' }} variant="accent">
                <Flex sx={{ flexDirection: 'column' }}>
                  <Paragraph sx={{ mb: 1 }}>You're looking at my office, with my computer and my belongings.</Paragraph>
                  <Paragraph>
                    You can move the camera around, or click on the objects highlighted in yellow and interact with
                    them.
                  </Paragraph>
                  <Button
                    onClick={(el) => {
                      el.currentTarget.disabled = true;

                      setTutorialStep('EASTER_EGG');

                      toast.dismiss(t.id);
                    }}
                    sx={{ my: 2, px: 2, py: 1, alignSelf: 'flex-end' }}
                    variant="white"
                  >
                    Next
                  </Button>
                </Flex>
              </Alert>
            ),
            {
              duration: Infinity
            }
          );
          break;
        case 'EASTER_EGG':
          toast(
            (t) => (
              <Alert key={t.id} sx={{ margin: '-8px -10px' }} variant="accent">
                <Flex sx={{ flexDirection: 'column' }}>
                  <Paragraph sx={{ mb: 1 }}>
                    There are also hidden Easter eggs waiting to be discovered! Each time you refresh the page, see if
                    you can spot any differences.
                  </Paragraph>
                  <Paragraph>I hope you enjoy it!</Paragraph>
                  <Button
                    onClick={(el) => {
                      el.currentTarget.disabled = true;

                      global.localStorage.setItem('TUTORIAL', 'DONE');

                      toast.dismiss(t.id);
                    }}
                    sx={{ my: 2, px: 2, py: 1, alignSelf: 'flex-end' }}
                    variant="white"
                  >
                    Got it!
                  </Button>
                </Flex>
              </Alert>
            ),
            {
              duration: Infinity
            }
          );
          break;
        default:
          break;
      }
    }
  }, [tutorialStep]);

  useFrame((state) => {
    if (tutorialStep === 'OBJECTS') setOutlineOpacity(Math.abs(Math.sin(state.clock.elapsedTime * 2)));
  });

  useLayoutEffect(() => {
    cameraToModel();
  }, [cameraToModel]);

  return (
    <group dispose={null} ref={modelGroupRef} {...props}>
      {/* Room */}
      {room}
      {/* Books */}
      {books}
      {/* Monitor */}
      {monitor}
      {/* Porsche */}
      {porsche}
      {/* Stereo Setup */}
      {stereo}
    </group>
  );
};

export default memo(Room);
