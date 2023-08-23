import { Clone, useGLTF } from '@react-three/drei'
/*  import { useLoader } from '@react-three/fiber' 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js' */
import React from 'react'
import PropTypes from 'prop-types'



const Oficina_model = ({scale=1, px=0,py=0,pz=0}) => {

   /*  const model = useLoader(GLTFLoader, './gigometro.gltf'); */ //This is the original code, without drei and using GlTFLoader  & useLoader directly
    const model = useGLTF('./gigometro.glb', true); //This is the code using drei and useGLTF
    useGLTF.preload('./gigometro.glb'); //This is the code using drei and useGLTF

  return <>

  <Clone object={ model.scene } scale= {scale} position-x={4}/>
  </>
  
}

Oficina_model.propTypes = {
scale: PropTypes.number
}


export default Oficina_model