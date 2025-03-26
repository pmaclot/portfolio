import React, { useCallback, useLayoutEffect, useRef } from 'react';

// Externals
import { CameraControls, useGLTF } from '@react-three/drei';
import { GroupProps, useThree } from '@react-three/fiber';
import { Group, Mesh, MeshStandardMaterial } from 'three';
import { GLTF } from 'three-stdlib';
import randomColor from 'randomcolor';

type GLTFResult = GLTF & {
  nodes: {
    Plane: Mesh;
    Plane_1: Mesh;
    Windows: Mesh;
    Windows_Frames: Mesh;
    Desk: Mesh;
    Desk_Legs: Mesh;
    Drawers: Mesh;
    Roundcube: Mesh;
    Roundcube001: Mesh;
    Roundcube002: Mesh;
    Shelves: Mesh;
    Stereo_Table: Mesh;
    Stereo_Table_Legs: Mesh;
    Sofa: Mesh;
    Sofa_Cushions: Mesh;
    Sofa_Legs: Mesh;
    Player: Mesh;
    Player_Knob_1: Mesh;
    Player_Knob_2: Mesh;
    Player_Legs: Mesh;
    Player000: Mesh;
    Player001: Mesh;
    Player002: Mesh;
    Player003: Mesh;
    Player005: Mesh;
    Circle003: Mesh;
    Circle003_1: Mesh;
    Speakers: Mesh;
    Record001: Mesh;
    Record002: Mesh;
    Record003: Mesh;
    Record004: Mesh;
    Record005: Mesh;
    Chair: Mesh;
    Arm_Rest: Mesh;
    Arm_Rest_Cushiion: Mesh;
    Chair_Legs: Mesh;
    Monitor: Mesh;
    Display: Mesh;
    Monitor_Screen: Mesh;
    Monitor_Stand: Mesh;
    Tree_Jar: Mesh;
    Dirt: Mesh;
    Tree: Mesh;
    Leaves: Mesh;
    Coffee_Table_1: Mesh;
    Coffee_Table_2: Mesh;
    Coffee_Table_Legs: Mesh;
    Coffee_Cup: Mesh;
    Handle: Mesh;
    Coffee: Mesh;
    Keyboard: Mesh;
    Keys: Mesh;
    Lamp: Mesh;
    Bulb: Mesh;
    Rod: Mesh;
    Mouse: Mesh;
    Notebook_1: Mesh;
    Notebook_2: Mesh;
    Art: Mesh;
    Cube002: Mesh;
    Cube002_1: Mesh;
    Cube002_2: Mesh;
    Cube002_3: Mesh;
    Cube002_4: Mesh;
    Cube002_5: Mesh;
    Cube002_6: Mesh;
    Back_Grille: Mesh;
    Rims: Mesh;
    Tire: Mesh;
    Book: Mesh;
    Book_1: Mesh;
  };
  materials: {
    White: MeshStandardMaterial;
    Floor: MeshStandardMaterial;
    Windows: MeshStandardMaterial;
    Wood: MeshStandardMaterial;
    Steel: MeshStandardMaterial;
    ['Wood Dark']: MeshStandardMaterial;
    Sofa: MeshStandardMaterial;
    Black: MeshStandardMaterial;
    Keys: MeshStandardMaterial;
    Coffee: MeshStandardMaterial;
    Jar: MeshStandardMaterial;
    Dirt: MeshStandardMaterial;
    Plant: MeshStandardMaterial;
    Leaves: MeshStandardMaterial;
    Stump: MeshStandardMaterial;
    Bulb: MeshStandardMaterial;
    Poster: MeshStandardMaterial;
    Carpaint: MeshStandardMaterial;
    Blackout: MeshStandardMaterial;
    ['Windows.001']: MeshStandardMaterial;
    FrontLight: MeshStandardMaterial;
    RearLight: MeshStandardMaterial;
    SideLight: MeshStandardMaterial;
    Chrome: MeshStandardMaterial;
    Metal: MeshStandardMaterial;
    Tire: MeshStandardMaterial;
    Book: MeshStandardMaterial;
    Pages: MeshStandardMaterial;
  };
};

const Room: React.FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF('/models/room.glb') as GLTFResult;
  const { controls } = useThree();

  // This is used for camera transitions
  const modelGroupRef = useRef<Group>(null!);

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
      (controls as unknown as CameraControls).rotatePolarTo(Math.PI / 2.5, false),
      (controls as unknown as CameraControls).fitToSphere(modelGroupRef.current, true)
    ]);
  }, [controls]);

  useLayoutEffect(() => {
    cameraToModel();
  }, [cameraToModel]);

  return (
    <group dispose={null} ref={modelGroupRef} {...props}>
      {/* Windows */}
      <mesh castShadow={false} geometry={nodes.Windows.geometry} material={materials.Windows} receiveShadow={true} />
      {/* Windows Frames */}
      <mesh castShadow={true} geometry={nodes.Windows_Frames.geometry} material={materials.Wood} receiveShadow={true} />
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
      {/* Stereo Table */}
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
      </mesh>
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
      {/* Player */}
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
        <mesh castShadow={true} geometry={nodes.Player_Legs.geometry} material={materials.Steel} receiveShadow={true} />
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
          <mesh castShadow={true} geometry={nodes.Circle003.geometry} material={materials.Black} receiveShadow={true} />
          <mesh
            castShadow={true}
            geometry={nodes.Circle003_1.geometry}
            material={materials.White}
            receiveShadow={true}
          />
        </group>
      </mesh>
      {/* Speakers */}
      <mesh
        castShadow={true}
        geometry={nodes.Speakers.geometry}
        material={materials.Keys}
        position={[3.354, 0, 1.012]}
        receiveShadow={true}
      />
      {/* Records */}
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
        <mesh castShadow={true} geometry={nodes.Chair_Legs.geometry} material={materials.Steel} receiveShadow={true} />
      </mesh>
      {/* Monitor */}
      <mesh
        castShadow={true}
        geometry={nodes.Monitor.geometry}
        material={materials.Steel}
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
        <mesh castShadow={true} geometry={nodes.Notebook_2.geometry} material={materials.White} receiveShadow={true} />
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
      {/* Porsche */}
      <group position={[-3.606, 3.93, -2.644]} scale={0.2}>
        <mesh
          castShadow={true}
          geometry={nodes.Cube002.geometry}
          material={
            new MeshStandardMaterial({
              color: randomColor({ luminosity: 'random' }),
              roughness: 0.5,
              metalness: 0.3
            })
          }
          receiveShadow={true}
        />
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
      {/* Books */}
      <group>
        <group position={[-3.721, 3.031, -1.775]} rotation={[0, 1.571, 0]} scale={[1.16, 1.044, 1.363]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'light' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.711, 3.031, -1.729]} rotation={[0, 1.571, 0]} scale={[1.16, 1.173, 1.363]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'light' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.721, 3.031, -1.653]} rotation={[0, 1.571, 0]} scale={[1.903, 1.347, 1.363]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'light' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.738, 3.031, -1.552]} rotation={[0, 1.571, 0]} scale={[2.647, 1.387, 1.363]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'light' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.721, 3.031, -1.507]} rotation={[0, 1.571, 0]} scale={[1.16, 1.255, 1.363]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'light' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.705, 3.031, -1.46]} rotation={[0, 1.571, 0]} scale={[1.16, 1.044, 1.363]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'light' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.721, 3.031, -1.414]} rotation={[0, 1.571, 0]} scale={[1.16, 1.173, 1.363]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'light' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.749, 3.031, -1.338]} rotation={[0, 1.571, 0]} scale={[1.903, 1.106, 1.363]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'light' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.721, 3.031, -1.285]} rotation={[0, 1.571, 0]} scale={[1.363, 1.221, 1.363]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'light' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.721, 3.031, -1.238]} rotation={[0, 1.571, 0]} scale={[1.16, 1.165, 1.363]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'light' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.711, 3.031, -1.191]} rotation={[0, 1.571, 0]} scale={[1.16, 1.31, 1.363]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'light' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.721, 3.031, -1.115]} rotation={[0, 1.571, 0]} scale={[1.903, 1.235, 1.363]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'light' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.738, 3.031, -1.014]} rotation={[0, 1.571, 0]} scale={[2.647, 1.272, 1.363]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'light' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.721, 3.031, -0.969]} rotation={[0, 1.571, 0]} scale={[1.16, 1.402, 1.363]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'light' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.705, 3.031, -0.923]} rotation={[0, 1.571, 0]} scale={[1.16, 1.165, 1.363]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'light' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.721, 3.031, -0.876]} rotation={[0, 1.571, 0]} scale={[1.16, 1.31, 1.363]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'light' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
        <group position={[-3.749, 3.031, -0.8]} rotation={[0, 1.571, 0]} scale={[1.903, 1.235, 1.363]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'light' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book_1.geometry} material={materials.Pages} receiveShadow={true} />
        </group>
      </group>
      {/* Wall */}
      <mesh castShadow={true} geometry={nodes.Plane.geometry} material={materials.White} receiveShadow={true} />
      {/* Floor */}
      <mesh castShadow={true} geometry={nodes.Plane_1.geometry} material={materials.Floor} receiveShadow={true} />
    </group>
  );
};

export default Room;
