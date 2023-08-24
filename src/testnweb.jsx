
import { useAnimations, useGLTF } from '@react-three/drei'
import React from 'react'
import { useEffect } from 'react'


export default function Cbl(props)
{

  const handleOnClick = (intersect) => {
    

    intersect.stopPropagation() 
    
    console.log(intersect);
    console.log(intersect.object.name);
};

const handleOnPointerEnter = (intersect) => {
  // Lógica para el evento onPointerEnter
  console.log(intersect.object.name);
};

const handleOnPointerLeave = (intersect) => {
  // Lógica para el evento onPointerLeave
    console.log(intersect.object.name);
};

  
    const oficina = useGLTF('./models/cbl.gltf', true);
    useGLTF.preload('./models/cbl.gltf');

    //make model cast shadows and receive shadows
    useEffect(() => {
    }, [oficina.scene]);
    
  return <>

  <primitive object={ oficina.scene }  {...props} />
  </>
  
}

