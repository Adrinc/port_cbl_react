
import { Text } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';


export function TextComponents(texto) {
    const [textoboton, changeTextBoton] = useState('Iniciar');
    const downloadRef = useRef();
    const uploadRef = useRef();
   

  useFrame(() => {
    if (downloadRef.current) {
      downloadRef.current.text = resultdownload.toFixed(1)>999.99 ? (resultdownload.toFixed(1)/1000).toFixed(2) +" Gb" : resultdownload.toFixed(1) +" Mb";
    }
    if (uploadRef.current) {
      uploadRef.current.text = resultupload.toFixed(1)>999.99 ? (resultupload.toFixed(1)/1000).toFixed(2) +" Gb" : resultupload.toFixed(1) +" Mb";
    }
  });


  return (
    <>
      <Text position={[2, 4.5, -3.3]} fontSize={0.5} color={'#ffffff'} maxWidth={7} textAlign='center' font="./fonts/sora.ttf" >
      Prueba tu velocidad de internet <meshStandardMaterial toneMapped={false} emissive={"#ffffff"} emissiveIntensity={2} />
    </Text>
      <Text position={[0.15, 1.45, -3.5]} fontSize={0.2} color={'#FFC500'} maxWidth={7} textAlign='center' font="./fonts/sora.ttf" >
      DOWNLOAD 
    </Text>
      <Text position={[4, 1.45, -3.5]} fontSize={0.2} color={'#FFC500'} maxWidth={7} textAlign='center' font="./fonts/sora.ttf" >
      UPLOAD 
    </Text>
      <Text position={[0.15, 1, -3.5]} fontSize={0.4} color={'#FFC500'} ref={downloadRef} fillOpacity={0.7} font="./fonts/dotgrid2.ttf">
        {resultdownload}
        <meshStandardMaterial toneMapped={false} emissive={"#ffffff"} emissiveIntensity={2} />
      </Text>
      <Text position={[4, 1, -3.5]} fontSize={0.4} color={'#FFC500'} ref={uploadRef} fillOpacity={0.7} font="./fonts/dotgrid2.ttf">
        {resultupload} 
        <meshStandardMaterial toneMapped={false} emissive={"#ffffff"} emissiveIntensity={2} />
      </Text>
      <Text position={[2.05, -0.17, -3.3]} fontSize={0.35} font="./fonts/sora.ttf">
        {textoboton}
    </Text>
    </>
  );
}
