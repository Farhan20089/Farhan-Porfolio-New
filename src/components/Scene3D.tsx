import React, { useRef, useMemo, Suspense, useState, useEffect, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { SceneFallback } from './SceneFallback';

// Error Boundary for WebGL context loss or shader crash
interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class CanvasErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("WebGL Scene error, rendering fallback:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Interactive Central 3D Sculpture
function CentralSculpture({ isMobile }: { isMobile: boolean }) {
  const outerGroupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  // Smooth lerp for mouse parallax
  useFrame((state, delta) => {
    const { x, y } = state.pointer;
    
    if (outerGroupRef.current) {
      // Mouse responsive rotation combined with idle drift
      outerGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        outerGroupRef.current.rotation.y,
        x * 0.7 + state.clock.getElapsedTime() * 0.2,
        delta * 3
      );
      outerGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        outerGroupRef.current.rotation.x,
        -y * 0.5 + Math.sin(state.clock.getElapsedTime() * 0.3) * 0.15,
        delta * 3
      );
    }

    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.4;
      coreRef.current.rotation.z += delta * 0.3;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.5;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += delta * 0.35;
      ring2Ref.current.rotation.y += delta * 0.25;
    }
  });

  const scale = isMobile ? 1.05 : 1.45;

  return (
    <group ref={outerGroupRef} scale={scale}>
      {/* Outer Floating Torus Knot - Futuristic metallic geometry */}
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[1, 0.28, 128, 24, 2, 3]} />
        <meshStandardMaterial
          color="#3b1d75"
          emissive="#1e103d"
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.92}
          wireframe={false}
        />
      </mesh>

      {/* Thin wireframe halo around the knot for high-tech aesthetic */}
      <mesh>
        <torusKnotGeometry args={[1.02, 0.29, 64, 16, 2, 3]} />
        <meshBasicMaterial
          color="#22d3ee"
          wireframe={true}
          transparent={true}
          opacity={0.18}
        />
      </mesh>

      {/* Inner Glowing Crystalline Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#8b5cf6"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>

      {/* Orbiting Metallic Ring 1 */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.85, 0.02, 16, 90]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#7c3aed"
          emissiveIntensity={0.6}
          metalness={0.95}
          roughness={0.1}
        />
      </mesh>

      {/* Orbiting Ring 2 (Cyan accents) */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[2.05, 0.015, 16, 90]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#06b6d4"
          emissiveIntensity={0.8}
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>
    </group>
  );
}

// Ambient Star & Energy Particle Field
function ParticleField({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const color1 = new THREE.Color("#8b5cf6");
    const color2 = new THREE.Color("#06b6d4");
    const color3 = new THREE.Color("#ffffff");

    for (let i = 0; i < count; i++) {
      // Distribute in a spherical radius
      const radius = 2.5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.5 
        ? color1.clone().lerp(color2, Math.random()) 
        : color2.clone().lerp(color3, Math.random());

      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        state.pointer.y * 0.1,
        0.05
      );
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors={true}
        transparent={true}
        opacity={0.75}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export const Scene3D: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  if (prefersReducedMotion) {
    return <SceneFallback />;
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] md:h-[540px] lg:h-[620px]">
      <CanvasErrorBoundary fallback={<SceneFallback />}>
        <Suspense fallback={<SceneFallback />}>
          <Canvas
            camera={{ position: [0, 0, 5.2], fov: 45 }}
            gl={{
              antialias: true,
              powerPreference: 'high-performance',
              alpha: true,
            }}
            dpr={[1, isMobile ? 1.5 : 2]}
          >
            {/* Ambient & Key Lighting */}
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 6, 4]} intensity={2.2} color="#a855f7" />
            <pointLight position={[-6, -4, -3]} intensity={2.5} color="#06b6d4" />
            <directionalLight position={[0, 8, 3]} intensity={1.5} color="#ffffff" />
            <pointLight position={[0, 0, 2]} intensity={0.8} color="#ec4899" />

            {/* Float helper from drei for effortless zero-g organic float */}
            <Float
              speed={2}
              rotationIntensity={0.6}
              floatIntensity={1.2}
              floatingRange={[-0.15, 0.15]}
            >
              <CentralSculpture isMobile={isMobile} />
            </Float>

            {/* Lightweight starfield / particles */}
            <ParticleField count={isMobile ? 140 : 380} />
          </Canvas>
        </Suspense>
      </CanvasErrorBoundary>
    </div>
  );
};
