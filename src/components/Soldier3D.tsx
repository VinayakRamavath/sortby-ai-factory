import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SoldierModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);
  const headRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const swing = Math.sin(t * 2) * 0.5;
    const counterSwing = Math.sin(t * 2 + Math.PI) * 0.5;

    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 2) * 0.05;
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.1;
    }
    if (leftArmRef.current) leftArmRef.current.rotation.x = swing;
    if (rightArmRef.current) rightArmRef.current.rotation.x = counterSwing;
    if (leftLegRef.current) leftLegRef.current.rotation.x = counterSwing * 0.7;
    if (rightLegRef.current) rightLegRef.current.rotation.x = swing * 0.7;
    if (headRef.current) headRef.current.rotation.y = Math.sin(t) * 0.1;
  });

  const material = new THREE.MeshStandardMaterial({ color: new THREE.Color("#5dd9d0"), metalness: 0.5, roughness: 0.3 });
  const darkMaterial = new THREE.MeshStandardMaterial({ color: new THREE.Color("#1d2a30"), metalness: 0.2, roughness: 0.6 });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Torso */}
      <mesh material={material} castShadow receiveShadow position={[0, 0.6, 0]}>
        <boxGeometry args={[0.7, 0.9, 0.35]} />
      </mesh>

      {/* Head */}
      <mesh ref={headRef} material={material} castShadow position={[0, 1.25, 0]}>
        <sphereGeometry args={[0.22, 32, 32]} />
      </mesh>
      {/* Helmet */}
      <mesh material={darkMaterial} castShadow position={[0, 1.38, 0]}>
        <cylinderGeometry args={[0.26, 0.26, 0.12, 24]} />
      </mesh>

      {/* Arms */}
      <mesh ref={leftArmRef} material={material} castShadow position={[-0.5, 0.7, 0]}>
        <boxGeometry args={[0.18, 0.7, 0.18]} />
      </mesh>
      <mesh ref={rightArmRef} material={material} castShadow position={[0.5, 0.7, 0]}>
        <boxGeometry args={[0.18, 0.7, 0.18]} />
      </mesh>

      {/* Legs */}
      <mesh ref={leftLegRef} material={darkMaterial} castShadow position={[-0.2, 0.15, 0]}>
        <boxGeometry args={[0.22, 0.7, 0.22]} />
      </mesh>
      <mesh ref={rightLegRef} material={darkMaterial} castShadow position={[0.2, 0.15, 0]}>
        <boxGeometry args={[0.22, 0.7, 0.22]} />
      </mesh>

      {/* Base */}
      <mesh position={[0, -0.3, 0]} receiveShadow>
        <cylinderGeometry args={[1.2, 1.2, 0.1, 32]} />
        <meshStandardMaterial color={new THREE.Color("#0f171b")} />
      </mesh>
    </group>
  );
};

const Soldier3D = () => {
  return (
    <div className="relative w-full h-[420px] md:h-[520px]">
      <Canvas camera={{ position: [0, 1, 3.8], fov: 55 }} shadows dpr={[1, 1.5]}> 
        <color attach="background" args={["#0c1316"]} />
        <hemisphereLight args={[0xffffff, 0x080820, 0.6]} />
        <directionalLight position={[3, 5, 3]} intensity={1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <pointLight position={[-3, 2, -2]} intensity={0.6} color="#5dd9d0" />
        <SoldierModel />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
    </div>
  );
};

export default Soldier3D;


