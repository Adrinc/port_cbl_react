import React from 'react';
import { useVideoTexture } from '@react-three/drei';
import * as THREE from 'three';


export default  function VideoTextureCBLUNA (props)  {

  const texture = useVideoTexture('./videos/10.mp4');
       
  return (
    <mesh {...props} position={[-10.1,4.4,-27.2]}>
      <planeGeometry args={[15.2,7.8]} />
      <meshBasicMaterial  map={texture} encoding={THREE.SRGBColorSpace} toneMapped={false}  />
    </mesh>
  );
};

