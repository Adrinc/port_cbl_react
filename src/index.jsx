import './style.css';
import './index.css';
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber';
import Scene from './Scene.jsx';
import * as THREE from 'three';
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom'; 
import {Suspense, useRef, useState, useEffect } from 'react'; 
import MouseListener  from './js/listeners/listenmouse'
import ScreenSizeListener from './js/listeners/listenScreenSize';


const App = () => {
const cameraRef = useRef();
const modelRef = useRef();
const speedTextRef= useRef();
const menuTextRef= useRef();



  return <>
    <Router>
      <Canvas
        dpr={[0.5, 1.2]}
        performance={{current: 1,min: 0.1,max: 1,debounce: 200,regress: 0.5}}
        shadows
        camera={{ far:2000, near: 0.1, fov: 45, position:[2, 3, 6.3], rotation:[0, 0, 0]}}
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
        scene={{ background: new THREE.Color('#000') }}
      >
        <Scene cameraRef={cameraRef} modelRef={modelRef} menuTextRef={menuTextRef} speedTextRef={speedTextRef}/>
        <MouseListener camera={cameraRef}  />
        <ScreenSizeListener camera={cameraRef} modelRef={modelRef} menuTextRef={menuTextRef}/>
      </Canvas>
    </Router>
  
 </>
};

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />);
