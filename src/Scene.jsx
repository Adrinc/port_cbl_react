import {Sparkles, Html, BakeShadows, Environment, OrbitControls, PerspectiveCamera} from '@react-three/drei'
import { Perf } from 'r3f-perf' 
import Officina from './oficina_model_plus'
import React, { Suspense, useEffect } from 'react'
import Placeholder from './components/Placeholder'
import VideoTextureCBLUNA from './components/video'
import { ToneMapping , ChromaticAberration, Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { enviromentConfig, pointLightConfig } from './js/scene_config';
import { vignetteConfig, chromaticAberrationConfig, bloomConfig, noiseConfig, toneMappingConfig } from './js/scene_config';
import SpeedTestText from './text/speedtest_text'
import MenuText from './text/menu_text'
import ContactForm from './components/formField'
import ScreenSizeListener from './js/listeners/listenScreenSize';

export default function Scene({ cameraRef, modelRef, menuTextRef, SpeedTestTextRef })
{


    let initCamera={far:2000, near: 0.1, fov: 45, position:[2, 3, 6.3], rotation:[0, 0, 0]}

    if (window.innerWidth <= 425) {
        initCamera= {far:2000, near: 0.1, fov: 55, position:[6, 3, 6.3], rotation:[0, 0, 0]}
      } 
    else if (window.innerWidth <= 768) {
        initCamera= {far:2000, near: 0.1, fov: 35, position:[6, 3, 6.3], rotation:[0, 0, 0]}
      } 
      else if (window.innerWidth<= 1024) {
        initCamera= {far:2000, near: 0.1, fov: 45, position:[7.3, 3, 6.3], rotation:[0, 0, 0]}
       
      } 
      else {
        initCamera= {far:2000, near: 0.1, fov: 45, position:[2, 3, 6.3], rotation:[0, 0, 0]}
      }
      
      

    return <> 

    <Suspense fallback={null}>
        <EffectComposer multisampling={4}>
            <ToneMapping {...toneMappingConfig}/>
            <Vignette {...vignetteConfig} />
            <ChromaticAberration {...chromaticAberrationConfig} />
            <Bloom {...bloomConfig} />
            <Noise {...noiseConfig} />
        </EffectComposer>
    </Suspense>
  {/*  <OrbitControls/> */}
    <PerspectiveCamera makeDefault ref={cameraRef} {...initCamera}/>
    <Environment {...enviromentConfig}/>
    <pointLight {...pointLightConfig} shadow-bias={-0.0003} shadow-mapSize={ [ 512*6,512*6] } shadow-normalBias={0.01}/>
    <ambientLight intensity={1} color={"#5d5d5d"} />
    <Suspense fallback={<Placeholder position-y={1} scale={[2, 3, 2]} />}>

        <Officina scale={[2,2,2]} position={[3,-3,-15]} ref={modelRef}  />
        <VideoTextureCBLUNA/>
        <MenuText ref={menuTextRef} rotation={[0,0,0]}   position={[4, 1.5, -20.9]}/>
        <SpeedTestText ref={SpeedTestTextRef} rotation={[0, Math.PI/2,0]}   position={[-18.3, 1.03, -12.67]} />
        <Sparkles rotation={[0, Math.PI/2,0]}   position={[-21, 3.5, -14]} count={200} scale={[6.5,6.5,2]} size={2.5} speed={0.1}/> 
        <Html occlude wrapperClass="htmlScreen" position={[14.165,1.48,-14.52]}   distanceFactor={ 1.17 }  transform scale={[0.38,0.46,0.5]}  rotation={ [ 0, 1.57, 0 ] }><iframe src="https://adrinc.github.io/ifnosotros/"  /></Html>
        <BakeShadows/>

        
       {/*  <Html occlude distanceFactor={ 1.17 }  transform  position={[14.2, 1.48, -14.52] } scale={[1,1,1]} rotation={ [ 0, 1.57, 0 ] } >
          <ContactForm />
        </Html> */}
        <ScreenSizeListener camera={cameraRef} modelRef={modelRef} menuTextRef={menuTextRef}/>
    </Suspense>

    </>
}