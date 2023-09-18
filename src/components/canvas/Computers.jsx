import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls } from "three-stdlib/controls/OrbitControls";
import { GLTFLoader } from "three-stdlib/loaders/GLTFLoader";

extend({ OrbitControls });

const Model = ({ scrollY }) => {
  const modelRef = useRef();
  const gltfLoader = useRef(new GLTFLoader());
  const [modelLoaded, setModelLoaded] = useState(false);
  const [modelOpacity, setModelOpacity] = useState(1);

  // Lade das 3D-Modell mit dem GLTFLoader vorab
  useEffect(() => {
    const loadModel = async () => {
      const gltf = await gltfLoader.current.loadAsync("./desktop_pc/scene.gltf");
      const model = gltf.scene;
      modelRef.current.add(model);
      // Verschiebe das Modell nach unten, um es in der Mitte zu positionieren
      model.position.set(8, -7, 0); // Setze die Position auf (0, 0, 0) für die Mitte des Bildschirms
      model.scale.set(11, 11, 11);
      setModelLoaded(true);
    };
    loadModel();
  }, []);

  // Opazität des Modells basierend auf der Scroll-Position
  useEffect(() => {
    const newOpacity = 1 - scrollY / window.innerHeight;
    setModelOpacity(newOpacity < 0 ? 0 : newOpacity); // Begrenzen der Opazität auf 0, um das Modell am Ende der Seite unsichtbar zu machen
  }, [scrollY]);

  // Animieren des Models, indem es sich seitwärts dreht
  useFrame(() => {
    const model = modelRef.current;
    if (modelLoaded) {
      model.rotation.y = scrollY * -0.012; // Seitwärts-Rotation, abhängig von der Scroll-Position
      model.traverse((child) => {
        if (child.isMesh) {
          child.material.opacity = modelOpacity; 
          child.material.transparent = true; 
        }
      });
    }
  });

  return <group ref={modelRef} />;
};

const ComputersCanvas = ({ scrollY }) => {
  const controlsRef = useRef();

  // Deaktivieren des Zoomens der OrbitControls
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.enableZoom = false;
    }
  }, [controlsRef.current]);

  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [0, 0, 50], fov: 45 }} // Verschieben der Kamera weiter nach hinten
      gl={{ alpha: true, preserveDrawingBuffer: true }} 
      onCreated={({ gl }) => {
        gl.setClearColor("#ffffff", 0); // Transparenter Hintergrund
      }}
    >
      <ambientLight intensity={15} />
      <directionalLight intensity={5} position={[0, 5, 5]} />
      <Model scrollY={scrollY} />
      {controlsRef.current && <orbitControls ref={controlsRef} enablePan={false} />}
    </Canvas>
  );
};

const Computers = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "right", justifyContent: "right" }}>
      <ComputersCanvas scrollY={scrollY} />
    </div>
  );
};

export default Computers;
