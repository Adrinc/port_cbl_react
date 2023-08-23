import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import * as THREE from 'three'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ - 4, 3, 6 ]
        } }
        gl={ { 
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
            /* physicallyCorrectLights: true, */
            stencil: false,
            depth: false, 
            toneMapping: THREE.NoToneMapping,
            toneMappingExposure: 0.6,
            gammaOutput: true,
            outputColorSpace: THREE.SRGBColorSpace,
        } }
    >
        <Experience />
    </Canvas>
)