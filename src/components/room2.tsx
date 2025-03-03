import React, { useCallback, useLayoutEffect, useRef } from 'react';

// Externals
import { CameraControls, useGLTF } from '@react-three/drei';
import { GroupProps, useThree } from '@react-three/fiber';
import { Group, Mesh, MeshStandardMaterial } from 'three';
import { GLTF } from 'three-stdlib';
import randomColor from 'randomcolor';

type GLTFResult = GLTF & {
  nodes: {
    Plane_2: Mesh;
    Plane_3: Mesh;
    Windows: Mesh;
    Windows_Frames: Mesh;
    Table: Mesh;
    Drawers: Mesh;
    Roundcube: Mesh;
    Roundcube001: Mesh;
    Roundcube002: Mesh;
    Table_Legs: Mesh;
    Shelves: Mesh;
    Stereo_Table: Mesh;
    Stereo_Table_Legs: Mesh;
    Sofa: Mesh;
    Sofa_Cushions: Mesh;
    Sofa_Legs: Mesh;
    Player004: Mesh;
    Player_Knob: Mesh;
    Player_Knob001: Mesh;
    Player_Legs: Mesh;
    Player001: Mesh;
    Player002: Mesh;
    Player003: Mesh;
    Player005: Mesh;
    Circle003: Mesh;
    Circle003_1: Mesh;
    Player: Mesh;
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
    Monitor001: Mesh;
    Display: Mesh;
    Monitor: Mesh;
    Monitor_Stand: Mesh;
    Vert: Mesh;
    tree: Mesh;
    leaves: Mesh;
    Vert001: Mesh;
    Vert002_1: Mesh;
    Vert002_2: Mesh;
    Plane: Mesh;
    Book0_1: Mesh;
    Book0_2: Mesh;
    Coffee: Mesh;
    Plane044: Mesh;
    Plane045: Mesh;
    Plane029: Mesh;
    Plane029_1: Mesh;
    Jar: Mesh;
    Keyboard: Mesh;
    Plane043: Mesh;
    Lamp: Mesh;
    Cube011: Mesh;
    Vert004: Mesh;
    Mouse: Mesh;
    Book0002_1: Mesh;
    Book0002_2: Mesh;
    ['abstract-expressionism-abstract-painting-acrylic-paint-1585325']: Mesh; // TODO: Delete this
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
    ['Black.001']: MeshStandardMaterial;
    ['Black.002']: MeshStandardMaterial;
    ['White.001']: MeshStandardMaterial;
    Plant: MeshStandardMaterial;
    Leaves: MeshStandardMaterial;
    Dirt: MeshStandardMaterial;
    Stump: MeshStandardMaterial;
    Book: MeshStandardMaterial; // TODO: Delete this
    ['abstract-expressionism-abstract-painting-acrylic-paint-1585325']: MeshStandardMaterial; // TODO: Delete this
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
      (controls as unknown as CameraControls).rotateAzimuthTo(Math.PI / 4, true),
      (controls as unknown as CameraControls).rotatePolarTo(Math.PI / 3, true),
      (controls as unknown as CameraControls).fitToSphere(modelGroupRef.current, true)
    ]);
  }, [controls]);

  useLayoutEffect(() => {
    cameraToModel();
  }, [cameraToModel]);

  return (
    <group dispose={null} ref={modelGroupRef} {...props}>
      <mesh castShadow={false} geometry={nodes.Windows.geometry} material={materials.Windows} receiveShadow={true} />
      <mesh castShadow={true} geometry={nodes.Windows_Frames.geometry} material={materials.Wood} receiveShadow={true} />
      <mesh
        castShadow={true}
        geometry={nodes.Table.geometry}
        material={materials.Wood}
        position={[0, 0, -3.06708]}
        receiveShadow={true}
      >
        <mesh
          castShadow={true}
          geometry={nodes.Drawers.geometry}
          material={materials.Wood}
          position={[-1.19975, 1.56341, 0.80001]}
          receiveShadow={true}
        >
          <mesh
            castShadow={true}
            geometry={nodes.Roundcube.geometry}
            material={materials.Steel}
            position={[0, 0, 0.05272]}
            receiveShadow={true}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Roundcube001.geometry}
            material={materials.Steel}
            position={[1.19005, 0, 0.05272]}
            receiveShadow={true}
          />
          <mesh
            castShadow={true}
            geometry={nodes.Roundcube002.geometry}
            material={materials.Steel}
            position={[2.40542, 0, 0.05272]}
            receiveShadow={true}
          />
        </mesh>
        <mesh castShadow={true} geometry={nodes.Table_Legs.geometry} material={materials.Steel} receiveShadow={true} />
      </mesh>
      <mesh
        castShadow={true}
        geometry={nodes.Shelves.geometry}
        material={materials.Wood}
        position={[-4.00006, 0, -1.98845]}
        receiveShadow={true}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Stereo_Table.geometry}
        material={materials['Wood Dark']}
        position={[3.35356, 0.00003, 1.0122]}
        receiveShadow={true}
      >
        <mesh
          castShadow={true}
          geometry={nodes.Stereo_Table_Legs.geometry}
          material={materials['Wood Dark']}
          receiveShadow={true}
        />
      </mesh>
      <mesh
        castShadow={true}
        geometry={nodes.Sofa.geometry}
        material={materials.Sofa}
        position={[-2.72971, 0.00001, 1.30732]}
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
      <mesh
        castShadow={true}
        geometry={nodes.Player004.geometry}
        material={materials.Wood}
        position={[3.34991, 0.5608, 1.01657]}
        receiveShadow={true}
      >
        <mesh
          castShadow={true}
          geometry={nodes.Player_Knob.geometry}
          material={materials.Black}
          position={[-0.3035, 0.11773, 0.48381]}
          receiveShadow={true}
        />
        <mesh
          castShadow={true}
          geometry={nodes.Player_Knob001.geometry}
          material={materials.Black}
          position={[-0.3035, 0.11773, 0.39267]}
          receiveShadow={true}
        />
        <mesh castShadow={true} geometry={nodes.Player_Legs.geometry} material={materials.Steel} receiveShadow={true} />
        <mesh
          castShadow={true}
          geometry={nodes.Player001.geometry}
          material={materials.Steel}
          position={[0, 0.11773, 0]}
          receiveShadow={true}
        />
        <mesh
          castShadow={true}
          geometry={nodes.Player002.geometry}
          material={materials.Steel}
          position={[0.13451, 0.11773, 0.40428]}
          receiveShadow={true}
        />
        <mesh
          castShadow={true}
          geometry={nodes.Player003.geometry}
          material={materials.Steel}
          position={[0.19742, 0.15992, 0.40428]}
          receiveShadow={true}
        />
        <mesh
          castShadow={true}
          geometry={nodes.Player005.geometry}
          material={materials.Steel}
          position={[-0.26222, 0.17555, 0.34094]}
          receiveShadow={true}
          rotation={[0, -0.36868, 0]}
        />
        <group position={[0, 0.14945, 0]}>
          <mesh castShadow={true} geometry={nodes.Circle003.geometry} material={materials.Black} receiveShadow={true} />
          <mesh
            castShadow={true}
            geometry={nodes.Circle003_1.geometry}
            material={materials.White}
            receiveShadow={true}
          />
        </group>
        <mesh
          castShadow={true}
          geometry={nodes.Player.geometry}
          material={materials.Steel}
          position={[0.12218, 0.17555, 0.40428]}
          receiveShadow={true}
        />
      </mesh>
      <mesh
        castShadow={true}
        geometry={nodes.Speakers.geometry}
        material={materials['Black.001']}
        position={[3.35356, 0.00003, 1.0122]}
        receiveShadow={true}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Record001.geometry}
        material={materials['Black.001']}
        position={[3.41849, 0.91989, -0.94308]}
        receiveShadow={true}
        rotation={[1.15881, 0, 0]}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Record002.geometry}
        material={materials['Black.001']}
        position={[3.32469, 0.91989, -0.9282]}
        receiveShadow={true}
        rotation={[1.15881, 0, 0]}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Record003.geometry}
        material={materials['Black.001']}
        position={[3.36558, 0.90288, -0.88141]}
        receiveShadow={true}
        rotation={[1.09194, 0, 0]}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Record004.geometry}
        material={materials['Black.001']}
        position={[3.31812, 0.90075, -0.86228]}
        receiveShadow={true}
        rotation={[1.09194, 0, 0]}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Record005.geometry}
        material={materials['Black.001']}
        position={[3.36558, 0.89224, -0.80061]}
        receiveShadow={true}
        rotation={[0.99832, 0, 0]}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Chair.geometry}
        material={materials.Sofa}
        position={[0, 0, -0.87603]}
        receiveShadow={true}
        scale={1.05454}
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
      <mesh
        castShadow={true}
        geometry={nodes.Monitor001.geometry}
        material={materials.Steel}
        position={[0.01194, 1.71909, -3.17089]}
        receiveShadow={true}
        scale={1.12938}
      >
        <mesh
          castShadow={true}
          geometry={nodes.Display.geometry}
          material={materials['Black.002']}
          receiveShadow={true}
        />
        <mesh castShadow={true} geometry={nodes.Monitor.geometry} material={materials.Steel} receiveShadow={true} />
        <mesh
          castShadow={true}
          geometry={nodes.Monitor_Stand.geometry}
          material={materials.Steel}
          receiveShadow={true}
        />
      </mesh>
      <mesh
        castShadow={true}
        geometry={nodes.Vert.geometry}
        material={materials['White.001']}
        position={[3.09971, 0.00002, -2.83856]}
        receiveShadow={true}
        rotation={[0, -0.33641, 0]}
        scale={0.89289}
      >
        <mesh
          castShadow={true}
          geometry={nodes.tree.geometry}
          material={materials.Plant}
          receiveShadow={true}
          scale={0.59851}
        >
          <mesh castShadow={true} geometry={nodes.leaves.geometry} material={materials.Leaves} receiveShadow={true} />
        </mesh>
        <mesh castShadow={true} geometry={nodes.Vert001.geometry} material={materials.Dirt} receiveShadow={true} />
      </mesh>
      <group position={[0.06978, 0, 1.98886]}>
        <mesh
          castShadow={true}
          geometry={nodes.Vert002_1.geometry}
          material={materials['Wood Dark']}
          receiveShadow={true}
        />
        <mesh castShadow={true} geometry={nodes.Vert002_2.geometry} material={materials.Stump} receiveShadow={true} />
        <mesh castShadow={true} geometry={nodes.Plane.geometry} material={materials.Steel} receiveShadow={true} />
      </group>
      <group position={[-3.73911, 3.03058, -0.95863]} rotation={[0, Math.PI / 2, 0]} scale={1.3793}>
        <mesh
          geometry={nodes.Book0_1.geometry}
          material={
            new MeshStandardMaterial({
              color: randomColor({ luminosity: 'dark', seed: 'book_1' }),
              roughness: 0.5,
              metalness: 0.3
            })
          }
        />
        <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        <group position={[0.03851, 0, -0.02097]} scale={[1.39602, 0.90597, 1]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book0_1.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'dark', seed: 'book_1' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        </group>
        <group position={[0.09444, 0, 0]} scale={[0.85121, 0.96086, 1]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book0_1.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'dark', seed: 'book_2' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        </group>
        <group position={[0.12837, 0, 0.01144]} scale={[0.85121, 0.85495, 1]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book0_1.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'dark', seed: 'book_0000' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        </group>
        <group position={[0.16229, 0, 0]} scale={[0.85121, 1.02832, 1]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book0_1.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'dark', seed: 'book_4' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        </group>
        <group position={[0.1953, 0, -0.01282]} scale={[1.94143, 0.93285, 1]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book0_1.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'dark', seed: 'book_8' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        </group>
        <group position={[0.26957, 0, 0]} scale={[1.39602, 0.90597, 1]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book0_1.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'dark', seed: 'book_1' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        </group>
        <group position={[0.3255, 0, 0.00706]} scale={[0.85121, 0.96086, 1]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book0_1.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'dark', seed: 'book_9' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        </group>
        <group position={[0.35942, 0, 0]} scale={[0.85121, 0.85495, 1]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book0_1.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'dark', seed: 'book_4' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        </group>
        <group position={[0.39452, 0, 0]} scale={[1, 0.89553, 1]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book0_1.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'dark', seed: 'book_4' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        </group>
        <group position={[0.43303, 0, -0.02097]} scale={[1.39602, 0.81132, 1]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book0_1.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'dark', seed: 'book_9' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        </group>
        <group position={[0.48896, 0, 0]} scale={[0.85121, 0.86048, 1]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book0_1.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'dark', seed: 'book_1' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        </group>
        <group position={[0.52288, 0, 0.01144]} scale={[0.85121, 0.76564, 1]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book0_1.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'dark', seed: 'book_8' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        </group>
        <group position={[0.55681, 0, 0]} scale={[0.85121, 0.9209, 1]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book0_1.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'dark', seed: 'book_7' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        </group>
        <group position={[0.58982, 0, -0.01282]} scale={[1.94143, 1.01757, 1]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book0_1.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'dark', seed: 'book_0000' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        </group>
        <group position={[0.66409, 0, 0]} scale={[1.39602, 0.98825, 1]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book0_1.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'dark', seed: 'book_2' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        </group>
        <group position={[0.72002, 0, 0.00706]} scale={[0.85121, 0.86048, 1]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book0_1.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'dark', seed: 'book_9' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        </group>
        <group position={[0.75394, 0, 0]} scale={[0.85121, 0.76564, 1]}>
          <mesh
            castShadow={true}
            geometry={nodes.Book0_1.geometry}
            material={
              new MeshStandardMaterial({
                color: randomColor({ luminosity: 'dark', seed: 'book_5' }),
                roughness: 0.5,
                metalness: 0.3
              })
            }
            receiveShadow={true}
          />
          <mesh castShadow={true} geometry={nodes.Book0_2.geometry} material={materials.White} receiveShadow={true} />
        </group>
      </group>
      <mesh
        castShadow={true}
        geometry={nodes.Coffee.geometry}
        material={materials['White.001']}
        position={[-0.86565, 1.71877, -2.82201]}
        receiveShadow={true}
        rotation={[0.0004, 0.57592, 0.00027]}
        scale={0.1367}
      >
        <mesh
          castShadow={true}
          geometry={nodes.Plane044.geometry}
          material={materials['Black.002']}
          receiveShadow={true}
        />
        <mesh
          castShadow={true}
          geometry={nodes.Plane045.geometry}
          material={nodes.Plane045.material}
          position={[-0.00296, 0, 0]}
          receiveShadow={true}
        />
      </mesh>
      <group position={[-3.55772, 3.92696, -1.2431]} rotation={[0.0003, 0.2232, -0.00037]} scale={1.16723}>
        <mesh castShadow={true} geometry={nodes.Plane029.geometry} material={materials.White} receiveShadow={true} />
        <mesh
          castShadow={true}
          geometry={nodes.Plane029_1.geometry}
          material={materials['Black.001']}
          receiveShadow={true}
        />
      </group>
      <mesh
        castShadow={true}
        geometry={nodes.Jar.geometry}
        material={materials['White.001']}
        position={[-3.54368, 3.92696, -2.72655]}
        receiveShadow={true}
        rotation={[-0.0003, 0, -0.00029]}
        scale={0.42454}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Keyboard.geometry}
        material={materials.Steel}
        position={[0.00127, 1.71884, -2.56051]}
        receiveShadow={true}
        rotation={[0.00056, 0, -0.00006]}
        scale={1.08812}
      >
        <mesh
          castShadow={true}
          geometry={nodes.Plane043.geometry}
          material={materials['Black.001']}
          receiveShadow={true}
          rotation={[0.08435, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow={true}
        geometry={nodes.Lamp.geometry}
        material={materials['White.001']}
        position={[-1.40974, 1.71866, -3.39389]}
        receiveShadow={true}
        rotation={[-1.57095, 1.5701, 1.57048]}
        scale={0.87706}
      >
        <mesh
          castShadow={true}
          geometry={nodes.Cube011.geometry}
          material={materials.White}
          position={[-0.00135, 1.02257, 0.18671]}
          receiveShadow={true}
          scale={1.24559}
        />
        <mesh
          castShadow={true}
          geometry={nodes.Vert004.geometry}
          material={materials['Black.001']}
          position={[0, 0.29228, 0]}
          receiveShadow={true}
        />
      </mesh>
      <mesh
        castShadow={true}
        geometry={nodes.Mouse.geometry}
        material={materials['White.001']}
        position={[0.71725, 1.71882, -2.61501]}
        receiveShadow={true}
        rotation={[0.00058, 0.32478, -0.00042]}
        scale={1.07899}
      />
      <group position={[1.07453, 1.71883, -3.1391]} rotation={[0, -1.10507, 1.57056]} scale={1.5561}>
        <mesh
          castShadow={true}
          geometry={nodes.Book0002_1.geometry}
          material={materials['Black.001']}
          receiveShadow={true}
        />
        <mesh castShadow={true} geometry={nodes.Book0002_2.geometry} material={materials.White} receiveShadow={true} />
      </group>
      <mesh
        castShadow={true}
        geometry={nodes['abstract-expressionism-abstract-painting-acrylic-paint-1585325'].geometry}
        material={materials['abstract-expressionism-abstract-painting-acrylic-paint-1585325']}
        position={[-4.00001, 3.28011, 1.97008]}
        receiveShadow={true}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.8889}
      />
      <mesh castShadow={true} geometry={nodes.Plane_2.geometry} material={materials.White} receiveShadow={true} />
      <mesh castShadow={true} geometry={nodes.Plane_3.geometry} material={materials.Floor} receiveShadow={true} />
    </group>
  );
};

useGLTF.preload('/models/room.glb');

export default Room;
