
import { Text } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';


export function TextComponents(texto) {
    const [textoboton, changeTextBoton] = useState('Iniciar');
    const downloadRef = useRef();
    const uploadRef = useRef();
   

  useFrame(() => {
    if (downloadRef.current) {
      downloadRef.current.text = resultdownload.toFixed(1);
    }
    if (uploadRef.current) {
      uploadRef.current.text = resultupload.toFixed(1);
    }
  });


  return (
    <>
      <Text position={[2, 4.5, -3.3]} fontSize={0.6} color={'#ffffff'} maxWidth={7} textAlign='center'>
      Prueba tu velocidad de internet <meshStandardMaterial toneMapped={false} emissive={"#ffffff"} emissiveIntensity={2} />
    </Text>
      <Text position={[0.12, 1.1, -3.5]} fontSize={0.5} ref={downloadRef}>
        {resultdownload}
      </Text>
      <Text position={[3.85, 1.1, -3.5]} fontSize={0.5} ref={uploadRef}>
        {resultupload}
      </Text>
      <Text position={[2.05, -0.17, -3.3]} fontSize={0.4}>
        {textoboton}
    </Text>
    </>
  );
}
