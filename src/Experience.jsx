import { Environment, ScrollControls, useScroll, OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import React, { Suspense, useState } from 'react';
import Placeholder from './Placeholder';
import { ToneMapping, ChromaticAberration, Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import { enviromentConfig, pointLightConfig } from './js/scene_config';
import { vignetteConfig, chromaticAberrationConfig, bloomConfig, noiseConfig, toneMappingConfig } from './js/scene_config';
import Cbl from './testnweb';
import { useFrame } from '@react-three/fiber';

export default function App() {
    const scroll = useScroll()

    useFrame((state, delta) => {
    
        // The offset is between 0 and 1, you can apply it to your models any way you like
       /*  const offset = 1 - scroll.offset
        state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
        state.camera.lookAt(0, 0, 0) */
      })

  return (
    <>
      <Perf position="top-left" />
      <color attach="background" args={['#000']} />
<OrbitControls makeDefault />
      <Suspense fallback={null}>
        <EffectComposer multisampling={4}>
          <ToneMapping {...toneMappingConfig} />
          <Vignette {...vignetteConfig} />
          <ChromaticAberration {...chromaticAberrationConfig} />
          <Bloom {...bloomConfig} />
          <Noise {...noiseConfig} />
        </EffectComposer>
      </Suspense>

  <Environment {...enviromentConfig} />
  <pointLight
    {...pointLightConfig}
    shadow-bias={-0.0003}
    shadow-mapSize={[512 * 6, 512 * 6]}
    shadow-normalBias={0.01}
  />
  <ambientLight intensity={1} color={'#5d5d5d'} />
      <ScrollControls pages={3}>
  <Suspense fallback={<Placeholder position-y={1} scale={[2, 3, 2]} />}>
    <Cbl position={[1.8, -18, -5]} rotation-x={1.6} />
  </Suspense>
</ScrollControls>

    </>
  );
}
