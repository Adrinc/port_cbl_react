import { Environment, ScrollControls, useScroll, OrbitControls, Scroll } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import React, { Suspense, useState, useRef } from 'react';
import Placeholder from './Placeholder';
import { ToneMapping, ChromaticAberration, Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import { enviromentConfig, pointLightConfig } from './js/scene_config';
import { vignetteConfig, chromaticAberrationConfig, bloomConfig, noiseConfig, toneMappingConfig } from './js/scene_config';
import Cbl from './testnweb';
import { useFrame } from '@react-three/fiber';
import VideoTextureCBLUNA from './video';

export default function Experienc(props) {


  return (
    <>
    {/*   <Perf position="top-left" /> */}
      <color attach="background" args={['#000']} />

      <Suspense fallback={null}>
        <EffectComposer multisampling={2}>
          <ToneMapping {...toneMappingConfig} />
          <Vignette {...vignetteConfig} />
          <ChromaticAberration {...chromaticAberrationConfig} />
          <Bloom {...bloomConfig} />
          <Noise {...noiseConfig} />
        </EffectComposer>
      </Suspense>

  <Environment {...enviromentConfig} />
 {/*  <pointLight
    {...pointLightConfig}
    shadow-bias={-0.0003}
    shadow-mapSize={[512 * 6, 512 * 6]}
    shadow-normalBias={0.01}
  /> */}
{/*   <OrbitControls/> */}

  <ambientLight intensity={7} color={'#5d5d5d'} />
      <ScrollControls pages={5}>
 
  <Suspense fallback={<Placeholder position-y={1} scale={[2, 3, 2]} />}>
    <Scroll>
    <Cbl position={[1.8, -18, -5]} rotation-x={1.6} />
  {/* <VideoTextureCBLUNA scale={0.7}/> */}
  </Scroll>

  </Suspense>
</ScrollControls>

    </>
  );
}
