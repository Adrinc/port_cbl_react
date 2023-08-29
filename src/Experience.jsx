import { Text, Sparkles, Environment, ScrollControls, useScroll, OrbitControls, Scroll } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import React, { Suspense, useState, useRef, useEffect } from 'react';
import Placeholder from './Placeholder';
import { ToneMapping, ChromaticAberration, Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import { enviromentConfig } from './js/scene_config';
import { vignetteConfig, chromaticAberrationConfig, bloomConfig, noiseConfig, toneMappingConfig } from './js/scene_config';
import Officina from './oficina_model_plus';

import VideoTextureCBLUNA from './video';
import { TextComponents } from './text/maintext';

export default function Experienc(props) {

   
  return (
<>
  <Perf position="top-left" />
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
  <ambientLight intensity={7} color={'#5d5d5d'} />

  <Suspense fallback={<Placeholder position-y={1} scale={[2, 3, 2]} />}>
    <ScrollControls pages={6}>
      <Scroll>
        <TextComponents />
        <Sparkles count={150} speed={0.1} position={[2,3,2]} scale={[8,8,3]} size={[1.5,1.5,1.5]} />
        <Officina position={[1.8, -18, -5]}  />
         <VideoTextureCBLUNA scale={0.7}/>
      </Scroll>
    </ScrollControls>
  </Suspense>

</>
  );
}
