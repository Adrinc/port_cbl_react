import './style.css';
import './index.css';
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber';
import Scene from './Scene.jsx';
import * as THREE from 'three';
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { useRef } from 'react'; 
import {PerspectiveCamera } from '@react-three/drei'


const App = () => {
  const cameraRef = useRef();

  

  return <>
    <Router>
      <Navbar camera={cameraRef} />
      <Canvas
        dpr={[0.5, 1.2]}
        performance={{
          current: 1,
          min: 0.1,
          max: 1,
          debounce: 200,
          regress: 0.5,
        }}
        shadows
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: false,
          toneMapping: THREE.NoToneMapping,
          toneMappingExposure: 0.6,
          gammaOutput: true,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
      >
         <PerspectiveCamera makeDefault far={2000} near={0.1} fov={45} position={[2, 3, 6.3]} rotation={[0, 0, 0]} ref={cameraRef} />
    
        <Scene />
      </Canvas>
    </Router>
  
        </>
};

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />);
