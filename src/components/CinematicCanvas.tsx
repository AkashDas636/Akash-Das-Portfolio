import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

function StarBackground(props: any) {
  const ref = useRef<any>(null);
  const sphere = useMemo(() => random.inSphere(new Float32Array(3000 * 3), { radius: 5 }), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#a8b1ff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

function FloatingObject() {
  const meshRef = useRef<any>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
      meshRef.current.rotation.y = Math.sin(t * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group position={[0, -0.2, -3]}>
        {/* Core sphere */}
        <Sphere ref={meshRef} args={[1.5, 128, 128]} scale={1.4}>
          <MeshDistortMaterial
            color="#08041a"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.4}
            metalness={0.8}
            emissive="#1a0b2e"
            emissiveIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Sphere>
        
        {/* Outer orbital sphere */}
        <Sphere args={[1.6, 64, 64]} scale={1.4}>
          <MeshDistortMaterial
            color="#d8b4fe"
            attach="material"
            distort={0.2}
            speed={1}
            roughness={0.1}
            metalness={1}
            wireframe
            transparent
            opacity={0.05}
          />
        </Sphere>
      </group>
    </Float>
  );
}

export function CinematicCanvas() {
  return (
    <div className="w-full h-screen absolute inset-0 z-[-1] overflow-hidden bg-[#030014]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: false, powerPreference: "high-performance" }}>
        <fog attach="fog" args={['#030014', 5, 15]} />
        <ambientLight intensity={0.5} color="#ffffff" />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#a855f7" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
        <spotLight position={[0, 5, 5]} intensity={2} color="#ffffff" penumbra={1} distance={10} />
        <StarBackground />
        <FloatingObject />
        <EffectComposer multisampling={4}>
          <Bloom luminanceThreshold={0.2} mipmapBlur luminanceSmoothing={0.9} intensity={1.5} />
        </EffectComposer>
      </Canvas>
      {/* Cinematic vignette / fade out to page contents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#030014_100%)] pointer-events-none opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#030014] via-[#030014]/80 to-transparent pointer-events-none" />
    </div>
  );
}
