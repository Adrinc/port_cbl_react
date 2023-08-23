

import { useAnimations, useGLTF } from '@react-three/drei'
import React from 'react'
import { useEffect } from 'react'
import { useControls } from 'leva'
import * as THREE from 'three';
import {upadateAllMaterials} from './js/globals.js';

export default function Officina(props)
{
    const oficina = useGLTF('./models/test.gltf', true);
    useGLTF.preload('./models/test.gltf');

    //make model cast shadows and receive shadows
    useEffect(() => {
      upadateAllMaterials(oficina.scene, 3);
    }, [oficina.scene]);
    
  return <>

  <primitive object={ oficina.scene }  {...props}/>
  </>
  
}
