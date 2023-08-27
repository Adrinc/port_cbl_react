import { Text, Sparkles, Environment, ScrollControls, useScroll, OrbitControls, Scroll } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import React, { Suspense, useState, useRef, useEffect } from 'react';
import Placeholder from './Placeholder';
import { ToneMapping, ChromaticAberration, Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import { enviromentConfig, pointLightConfig } from './js/scene_config';
import { vignetteConfig, chromaticAberrationConfig, bloomConfig, noiseConfig, toneMappingConfig } from './js/scene_config';
import Cbl from './testnweb';
import { useFrame } from '@react-three/fiber';
import VideoTextureCBLUNA from './video';

export default function Experienc(props) {

   
  const speedRef = useRef();
  const downloadRef = useRef();
  const uploadRef = useRef();

  useFrame(() => {
    // Esto se ejecutará en cada cuadro de animación
    // Actualiza el valor del texto con el valor actualizado de speedTest
  /*   if (speedRef.current) {
      speedRef.current.text = resultdownload.toFixed(1);
    }
    else */ if (downloadRef.current) {
      downloadRef.current.text = resultdownload.toFixed(1);
    }
    if (uploadRef.current) {
      uploadRef.current.text = resultupload.toFixed(1);
    }
  });

 


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
      <ScrollControls pages={5}>
 
  <Suspense fallback={<Placeholder position-y={1} scale={[2, 3, 2]} />}>
    <Scroll>
      <Text position={[0.12,1.1,-3.5]}  fontSize={ 0.5 } ref={downloadRef}> {resultdownload} </Text>
      <Text position={[3.85,1.1,-3.5]}  fontSize={ 0.5 } ref={uploadRef}> {resultupload} </Text>
    <Sparkles count={150} speed={0.1} position={[2,3,2]} scale={[8,8,3]} size={[1.5,1.5,1.5]} />
    <Cbl position={[1.8, -18, -5]} rotation-x={1.6} />
  <VideoTextureCBLUNA scale={0.7}/>
  </Scroll>

  </Suspense>
</ScrollControls>

    </>
  );
}
