import {Sparkles, Html, BakeShadows, Environment, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf' 
import Officina from './oficina_model_plus'
import React, { Suspense } from 'react'
import Placeholder from './Placeholder'
import VideoTextureCBLUNA from './video'
import { ToneMapping , ChromaticAberration, Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { enviromentConfig, pointLightConfig } from './js/scene_config';
import { vignetteConfig, chromaticAberrationConfig, bloomConfig, noiseConfig, toneMappingConfig } from './js/scene_config';
import TextComponents from './text/maintext'

export default function Experience()
{

    
    return <> 
{/*     <Perf position="top-left" /> */}
    <color attach="background" args={["#000"]} />
    
    <Suspense fallback={null}>
        <EffectComposer multisampling={4}>
            <ToneMapping {...toneMappingConfig}/>
            <Vignette {...vignetteConfig} />
            <ChromaticAberration {...chromaticAberrationConfig} />
            <Bloom {...bloomConfig} />
            <Noise {...noiseConfig} />
        </EffectComposer>
    </Suspense>

  {/*   <OrbitControls makeDefault /> */}
    <Environment {...enviromentConfig}/>
    <pointLight {...pointLightConfig} shadow-bias={-0.0003} shadow-mapSize={ [ 512*6,512*6] } shadow-normalBias={0.01}/>
    <ambientLight intensity={1} color={"#5d5d5d"} />
    <Suspense fallback={<Placeholder position-y={ 1 } scale={ [ 2, 3, 2 ] }/>}>
        <Officina scale={[2,2,2]} position={[3,-3.1,-15]}/>

        <Html occlude wrapperClass="htmlScreen" position={[14.165,1.48,-14.52]}   distanceFactor={ 1.17 }  transform scale={0.72}  rotation={ [ 0, 1.57, 0 ] }>
            <iframe src="https://adrinc.github.io/ifnosotros/"  />
        </Html>

        <BakeShadows />
        <VideoTextureCBLUNA/>
        <TextComponents rotation={[0, Math.PI/2,0]}   position={[-18.3, 1.03, -12.67]}/>
        <Sparkles rotation={[0, Math.PI/2,0]}   position={[-19, 3.5, -14]} count={200} scale={[6.5,2]} size={2.5} speed={0.1}/>
    </Suspense>

    </>
}