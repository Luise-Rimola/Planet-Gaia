import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Interactive3DModel = ({ onButtonClicked, buttons }) => {
  const earth = useGLTF("/desktop_pc/sculpted_3d_earth_globe/erde.gltf");

  return (
    <group>
      <primitive object={earth.scene} scale={13} position-y={0} rotation-y={1} />
      {buttons.map((button, index) => (
        <InteractiveButton key={index} position={button.position} onClick={() => onButtonClicked(button.data)} />
      ))}
      <ambientLight intensity={3} />
      <directionalLight intensity={1.5} position={[0, 10, 5]} />
    </group>
  );
};

const InteractiveButton = ({ position, onClick }) => {
  const [expanded, setExpanded] = useState(false);
  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    onClick();
    setExpanded((expanded) => !expanded);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      
        setExpanded(false);
      
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <mesh position={position} onClick={handleButtonClick} ref={buttonRef}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color={expanded ? "green" : "red"} />
    </mesh>
  );
};

const Info = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "100px",
        left: "50px",
        padding: "10px",
        backgroundColor: "white",
        border: "2px solid red",
      }}
    >
      
      <p className="mt-1 text-secondary "> ! Klicke auf die roten Markierungen auf der Weltkugel.</p>
    </div>
  );
};

const ExpandingTextBox = ({ data }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "100px",
        right: "20px",
        padding: "10px",
        backgroundColor: "white",
        border: "2px solid black",
      }}
    >
      <p className="text-secondary">Company: {data.company}</p>
      <p className="text-secondary">Emission: {data.emissions}</p>
      <p className="text-secondary">Percent: {data.percent}%</p>
      <p className="text-secondary">Land: {data.land}</p>
      <p className="text-secondary">Landes-Emission: {data.lem}</p>
      <p className="text-secondary">Kontinent: {data.continent}</p>
      <p className="text-secondary">Kontinent-Emission: {data.cem}</p>
    </div>
  );
};

const EarthCanvas = () => {
  const [expandedData, setExpandedData] = useState(null);

  const handleButtonClicked = (data) => {
    if (expandedData === data) {
      setExpandedData(null);
    } else {
      setExpandedData(data);
    }
  };

  const handleOutsideClick = () => {
    setExpandedData(null);
  };

  const buttons = [
    {
      position: [3.6, -1.8, 0.5],
      data: {
        company: "Shoprite Holdings",
        emissions: 10,
        percent: 2.29,
        land: "Südfrika",
        lem: 435,
        continent: "Afrika",
        cem: 1455,
      },
    },
    {
      position: [3.65, 1.6, 0],
      data: {
        company: "Global Telecom Holding",
        emissions: 102,
        percent: 24,
        land: "Ägypten",
        lem: 295,
        continent: "Afrika",
        cem: 1455,
      },
    },
    {
      position: [0, -1.8, -3.6],
      data: {
        company: "Westfarmers",
        emissions: 97,
        percent: 26.43,
        land: "Australien",
        lem: 367,
        continent: "Oceania",
        cem: 418,
      },
    },
    {
      position: [-1.1, -1.7, -3.4],
      data: {
        company: "Westpac",
        emissions: 21,
        percent: 5.72,
        land: "Australien",
        lem: 367,
        continent: "Oceania",
        cem: 418,
      },
    },
    {
      position: [-0.6, -1.4, -3.7],
      data: {
        company: "Goodman Group",
        emissions: 83,
        percent: 22.61,
        land: "Australien",
        lem: 367,
        continent: "Oceania",
        cem: 418,
      },
    },
    {
      position: [1.8, 2.2, -3],
      data: {
        company: "State Grid",
        emissions: 530,
        percent: 4.2,
        land: "China",
        lem: 12.466,
        continent: "Asien",
        cem: 22.449,
      },
    },
    {
      position: [2, 2.3, -2.8],
      data: {
        company: "Alibaba Group",
        emissions: 1290,
        percent: 10.34,
        land: "China",
        lem: 12.466,
        continent: "Asien",
        cem: 22.449,
      },
    },
    {
      position: [1.8, 2.5, -2.77],
      data: {
        company: "JD.com",
        emissions: 62,
        percent: 1.29,
        land: "China",
        lem: 12.466,
        continent: "Asien",
        cem: 22.449,
      },
    },
    {
      position: [1.3, 2.4, -3.1],
      data: {
        company: "Seven & I Holdings",
        emissions: 259,
        percent: 2.07,
        land: "China",
        lem: 12.466,
        continent: "Asien",
        cem: 22.449,
      },
    },
    {
      position: [0.6, 1.5, -3.6],
      data: {
        company: "CK Hutchison Holdings",
        emissions: 13,
        percent: 39.39,
        land: "Hong Kong",
        lem: 33,
        continent: "Asien",
        cem: 22.449,
      },
    },
    {
      position: [2.6, 1.4, -2.65],
      data: {
        company: "Reliance Industries",
        emissions: 129,
        percent: 4.87,
        land: "Indien",
        lem: 2.648,
        continent: "Asien",
        cem: 22.449,
      },
    },
    {
      position: [0.09, 1.55, -3.65],
      data: {
        company: "Foxconn",
        emissions: 135,
        percent: 46.87,
        land: "Taiwan",
        lem: 288,
        continent: "Asien",
        cem: 22.449,
      },
    },
    {
      position: [1.45, 1.1, -3.6],
      data: {
        company: "PTT PCL",
        emissions: 48,
        percent: 17.84,
        land: "Thailand",
        lem: 269,
        continent: "Asien",
        cem: 22.449,
      },
    },
    {
      position: [-0.3, 2.3, -3.2],
      data: {
        company: "Samsung Electronics",
        emissions: 234,
        percent: 37.38,
        land: "Südkorea",
        lem: 626,
        continent: "Asien",
        cem: 22.449,
      },
    },
    {
      position: [-0.7, 2.3, -3.2],
      data: {
        company: "Nippon Yūsei",
        emissions: 123,
        percent: 11.34,
        land: "Japan",
        lem: 1084,
        continent: "Asien",
        cem: 22.449,
      },
    },
    {
      position: [3.5, 1.5, -1.2],
      data: {
        company: "Etisalat",
        emissions: 10,
        percent: 5.18,
        land: "VAE",
        lem: 193,
        continent: "Asien",
        cem: 22.449,
      },
    },
    {
      position: [3.35, 1.6, -1.4],
      data: {
        company: "Emaar Properties",
        emissions: 68,
        percent: 35.23,
        land: "VAE",
        lem: 193,
        continent: "Asien",
        cem: 22.449,
      },
    },
    {
      position: [3.6, 1.6, -0.7],
      data: {
        company: "Saudi Telecom",
        emissions: 210,
        percent: 35.83,
        land: "Saudi-Arabien",
        lem: 586,
        continent: "Asien",
        cem: 22.449,
      },
    },
    {
      position: [3.2, 2.1, -1.4],
      data: {
        company: "National Petrochemical Company",
        emissions: 19,
        percent: 2.67,
        land: "Iran",
        lem: 710,
        continent: "Asien",
        cem: 22.449,
      },
    },
    {
      position: [3.5, 2, 0],
      data: {
        company: "TEVA Pharmaceutical Industries Ltd.",
        emissions: 8,
        percent: 13.55,
        land: "Israel",
        lem: 59,
        continent: "Asien",
        cem: 22.449,
      },
    },
    {
      position: [3.2, 2.5, 0],
      data: {
        company: "Koç Holding",
        emissions: 34,
        percent: 7.5,
        land: "Türkei",
        lem: 449,
        continent: "Asien",
        cem: 22.449,
      },
    },
    {
      position: [2.75, 2.7, 1],
      data: {
        company: "Ferrari",
        emissions: 256,
        percent: 80.25,
        land: "Italien",
        lem: 319,
        continent: "Europa",
        cem: 5.447,
      },
    },
    {
      position: [2.6, 2.9, 1.1],
      data: {
        company: "Hoffmann-La Roche",
        emissions: 16,
        percent: 45.71,
        land: "Schweiz",
        lem: 35,
        continent: "Europa",
        cem: 5.447,
      },
    },
    {
      position: [2.4, 2.9, 1.4],
      data: {
        company: "LVMH",
        emissions: 37,
        percent: 12.25,
        land: "Frankreich",
        lem: 302,
        continent: "Europa",
        cem: 5.447,
      },
    },
    {
      position: [2.3, 2.6, 2],
      data: {
        company: "Jerónimo Martins",
        emissions: 18,
        percent: 44.7,
        land: "Portugal",
        lem: 38,
        continent: "Europa",
        cem: 5.447,
      },
    },
    {
      position: [2.5, 2.6, 1.8],
      data: {
        company: "Inditex",
        emissions: 16,
        percent: 45.71,
        land: "Spanien",
        lem: 35,
        continent: "Europa",
        cem: 5.447,
      },
    },
    {
      position: [2.7, 2.1, 2.1],
      data: {
        company: "Omnium Nord Africain",
        emissions: 24,
        percent: 32.87,
        land: "Marokko",
        lem: 73,
        continent: "Afrika",
        cem: 1455,
      },
    },
    {
      position: [1.9, 3.2, 1.4],
      data: {
        company: "BBC",
        emissions: 13,
        percent: 3.88,
        land: "Großbrittanien",
        lem: 335,
        continent: "Europa",
        cem: 5.447,
      },
    },
    {
      position: [2.4, 3.1, 0.9],
      data: {
        company: "Volkswagen",
        emissions: 293,
        percent: 44.06,
        land: "Deutschland",
        lem: 665,
        continent: "Europa",
        cem: 5.447,
      },
    },
    {
      position: [1.4, 3.7, 0.6],
      data: {
        company: "Equinor",
        emissions: 35,
        percent: 83.33,
        land: "Norwegen",
        lem: 42,
        continent: "Europa",
        cem: 5.447,
      },
    },
    {
      position: [1.5, 3.7, 0.3],
      data: {
        company: "IKEA",
        emissions: 28,
        percent: 73.63,
        land: "Schweden",
        lem: 38,
        continent: "Europa",
        cem: 5.447,
      },
    },
    {
      position: [1.7, 3.5, -1],
      data: {
        company: "Magnit",
        emissions: 190,
        percent: 9.78,
        land: "Russland",
        lem: 1942,
        continent: "Europa",
        cem: 5.447,
      },
    },
    {
      position: [0.5, -1.3, 3.8],
      data: {
        company: "Vale do Rio",
        emissions: 121,
        percent: 24.74,
        land: "Brasilien",
        lem: 498,
        continent: "Südamerika",
        cem: 1.087,
      },
    },
    {
      position: [0.8, -0.8, 3.85],
      data: {
        company: "Grupo Votorantim",
        emissions: 83,
        percent: 16.9,
        land: "Brasilien",
        lem: 498,
        continent: "Südamerika",
        cem: 1.087,
      },
    },
    {
      position: [0.2, -0.95, 3.9],
      data: {
        company: "CEMIG",
        emissions: 43,
        percent: 8.79,
        land: "Brasilien",
        lem: 498,
        continent: "Südamerika",
        cem: 1.087,
      },
    },
    {
      position: [0.2, -0.1, 4],
      data: {
        company: "Vivo",
        emissions: 55,
        percent: 11.24,
        land: "Brasilien",
        lem: 498,
        continent: "Südamerika",
        cem: 1.087,
      },
    },
    {
      position: [-2.6, 1.5, 2.72],
      data: {
        company: "FEMSA",
        emissions: 130,
        percent: 31.1,
        land: "Mexico",
        lem: 418,
        continent: "Mittelamerika",
        cem: 482,
      },
    },
    {
      position: [-2.8, 2, 2.2],
      data: {
        company: "Walmart",
        emissions: 611,
        percent: 12.85,
        land: "USA",
        lem: 4.752,
        continent: "Nordamerika",
        cem: 5.316,
      },
    },
    {
      position: [-2.7, 2.55, 1.75],
      data: {
        company: "Amazon",
        emissions: 513,
        percent: 10.79,
        land: "USA",
        lem: 4.752,
        continent: "Nordamerika",
        cem: 5.316,
      },
    },
    {
      position: [-2.1, 2.2, 2.6],
      data: {
        company: "Apple",
        emissions: 394,
        percent: 8.2,
        land: "USA",
        lem: 4.752,
        continent: "Nordamerika",
        cem: 5.316,
      },
    },
    {
      position: [-2.1, 2.5, 2.35],
      data: {
        company: "Microsoft",
        emissions: 198,
        percent: 4.16,
        land: "USA",
        lem: 4.752,
        continent: "Nordamerika",
        cem: 5.316,
      },
    },
    {
      position: [-1.5, 2.5, 2.7],
      data: {
        company: "Best Buy",
        emissions: 442,
        percent: 9.3,
        land: "USA",
        lem: 4.752,
        continent: "Nordamerika",
        cem: 5.316,
      },
    },
    {
      position: [-2.2, 3.2, 1.3],
      data: {
        company: "Empire Company",
        emissions: 189,
        percent: 33.57,
        land: "Kanada",
        lem: 563,
        continent: "Nordamerika",
        cem: 5.316,
      },
    },

  ];

  

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    
    <div style={{}}>
      
      <Canvas
        style={{ height: "100vh" }}
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 15],
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.1}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Interactive3DModel
            onButtonClicked={handleButtonClicked}
            buttons={buttons}
          />
          
          <Preload all />
        </Suspense>
        
      </Canvas>
      <Info />
      {expandedData && (
        <ExpandingTextBox
          onButtonClicked={handleButtonClicked}
          data={expandedData}
        />
        
      )}
      
    </div>
  );
};

export default EarthCanvas;
