import React from 'react';
import { useVideoTexture } from '@react-three/drei';
import * as THREE from 'three';


export default  function VideoTextureCBLUNA (props)  {

  const texture = useVideoTexture('./videos/10.mp4');
       
  return (
    <mesh {...props} position={[0.8,-10,-4]}>
      <planeGeometry args={[8,5]} />
      <meshBasicMaterial  map={texture} /* encoding={THREE.SRGBColorSpace} toneMapped={false}   *//>
    </mesh>
  );
};

