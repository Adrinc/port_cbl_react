

import React, { useEffect, useRef, forwardRef } from "react";

import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationsGsap } from "./js/animations.js";
import globalVariables from './js/globals.js';
import { gsap } from "gsap";
import * as THREE from 'three';

const Officina = forwardRef((props, ref) => {

  const { nodes, materials, animations } = useGLTF("./models/test.gltf");
  const { actions } = useAnimations(animations, ref);
  const animationsGsap = new AnimationsGsap(actions);
  
  useEffect(() => {


  
  ref.current.children[0].getObjectByName("nodo_nosotros").attach(ref.current.__r3f.parent.getObjectByName("nosotros_text"));
  ref.current.children[0].getObjectByName("nodo_servicios").attach(ref.current.__r3f.parent.getObjectByName("servicios_text"));
  ref.current.children[0].getObjectByName("nodo_speedtest").attach(ref.current.__r3f.parent.getObjectByName("speedtest_text"));
  ref.current.children[0].getObjectByName("nodo_contacto").attach(ref.current.__r3f.parent.getObjectByName("contacto_text"));
  ref.current.children[0].getObjectByName("nodo_desarrollo").attach(ref.current.__r3f.parent.getObjectByName("desarrollo_text"));
  ref.current.children[0].getObjectByName("nodo_proyectos").attach(ref.current.__r3f.parent.getObjectByName("proyectos_text"));


    
  }, []);
 
 


  const handleOnClick = (intersect) => {
    

    intersect.stopPropagation() 
    

    switch (intersect.object.name) {
      case "tv_screen":
        globalVariables.nowWatching == 'animationToTelevisor'? animationsGsap.animationToTelevisorZoom(intersect.camera) : animationsGsap.animationToTelevisor(intersect.camera);
        break;
      case "nodo_nosotros":
        animationsGsap.animationToNosotros(intersect.camera);
        break;
      case "nodo_proyectos":
       
        break;
      case "nodo_speedtest":
        animationsGsap.animationToGalaxy(intersect.camera);
        break;

      case "nodo_servicios":
        animationsGsap.nodo_servicios();
        break;
      case "nodo_contacto":
       /*  animationsGsap.nodo_contacto(); */
        break;
      case "nodo_desarrollo":

        break;
      case "Boton":
        //start actions
        actions['Satelite'].stop();
        actions['Astronauta'].stop();
        actions['Satelite'].play();
        actions['Astronauta'].play();
      /*   actions._clip.VacíoAction.play();

        start(); */
        start();
     /*    animatee(); */
        intersect.object.material.color === '#ff0000'? intersect.object.material.color.set('#0000ff') : intersect.object.material.color.set('#ff0000');
  
        break;
      default:
        break;
    }

  };

const handleOnPointerEnter = (intersect) => {
  intersect.stopPropagation();
  if (!intersect.object.name.includes('text') )
  document.body.style.cursor = 'pointer';
  intersect.object.name.includes('Boton')? gsap.to(intersect.object.scale, { x: 0.405, y: 0.046, z: 0.160, duration: 0.5 }) : null;
  intersect.object.name.includes('nodo')? gsap.to(intersect.object.scale, { x: 0.568, y: 0.213, z: 0.568, duration: 0.5 }) : null;
  intersect.object.name.includes('nodo')? gsap.to(intersect.object.material, { emissiveIntensity: 2, duration: 0.5 }) : null;

};

const handleOnPointerLeave = (intersect) => {
  intersect.stopPropagation();
    document.body.style.cursor = 'default';
    intersect.object.name.includes('Boton')? gsap.to(intersect.object.scale, { x: 0.305, y: 0.046, z: 0.112, duration: 0.5 }) : null;
    intersect.object.name.includes('nodo')? gsap.to(intersect.object.scale, { x: 0.468, y: 0.113, z: 0.468, duration: 0.5 }) : null;
    intersect.object.name.includes('nodo')? gsap.to(intersect.object.material, { emissiveIntensity: 0, duration: 0.5 }) : null;
};

  



  return <>
  
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
      <mesh
          name="logo_cbluna"
          castShadow
          receiveShadow
          geometry={nodes.logo_cbluna.geometry}
          material={materials.luna}
          position={[1.977, 3.198, -6.189]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={41.747}
        />
        <mesh
          name="sillon"
          castShadow
          receiveShadow
          geometry={nodes.sillon.geometry}
          material={materials.Material_2146932551}
          position={[-6.562, 0.75, 0.394]}
          rotation={[-Math.PI / 2, 0, 0.023]}
          scale={0.002}
        />
        <mesh
          name="ciudad"
      
          geometry={nodes.ciudad.geometry}
          material={materials["884171"]}
          position={[12.933, 4.926, 0.118]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={[1.531, 2.107, 0.819]}
        />
        <group
          name="escritorio"
          position={[5.669, 1.509, 0.275]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[3.239, 2.509, 8.43]}
        >
          <mesh
            name="Minimalistic_Modern_Office_Table_0"
            castShadow
            receiveShadow
            geometry={nodes.Minimalistic_Modern_Office_Table_0.geometry}
            material={materials.Table}
          />
          <mesh
            name="Minimalistic_Modern_Office_Table_0_1"
            castShadow
            receiveShadow
            geometry={nodes.Minimalistic_Modern_Office_Table_0_1.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <mesh
          name="silla"
          castShadow
          receiveShadow
          geometry={nodes.silla.geometry}
          material={materials.OfficeChair_Modern}
          position={[7.585, 1.052, 0.35]}
          rotation={[Math.PI, -1.558, Math.PI]}
          scale={0.023}
        />
        <mesh
          name="ventana"
          castShadow
          receiveShadow
          geometry={nodes.ventana.geometry}
          material={materials.Window}
          position={[9.044, 3.754, 1.02]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[2.946, 5.513, 3.558]}
        />
        <group
          name="macbook_cuerpo"
          position={[5.592, 1.859, 0.238]}
          rotation={[-1.57, -0.112, 1.582]}
          scale={0.362}
        >
          <mesh
            name="Object_12"
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            name="Object_12_1"
            castShadow
            receiveShadow
            geometry={nodes.Object_12_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Object_12_2"
            castShadow
            receiveShadow
            geometry={nodes.Object_12_2.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            name="Object_12_3"
            castShadow
            receiveShadow
            geometry={nodes.Object_12_3.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <mesh
          name="switch"
          castShadow
          receiveShadow
          geometry={nodes["switch"].geometry}
          material={materials.Mat1}
          position={[6.494, 3.233, -6.15]}
          rotation={[-1.471, 0, 0]}
          scale={[0.276, 0.112, 0.275]}
        />
        <group
          name="macbook_pantalla"
          position={[5.58, 2.256, 0.238]}
          rotation={[-1.57, 0, 1.582]}
          scale={0.362}
        >
          <mesh
            name="Object_12001"
            castShadow
            receiveShadow
            geometry={nodes.Object_12001.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            name="Object_12001_1"
            castShadow
            receiveShadow
            geometry={nodes.Object_12001_1.geometry}
            material={materials["Material.003"]}
          />
        </group>
        <mesh
          name="macbook_letras"
          castShadow
          receiveShadow
          geometry={nodes.macbook_letras.geometry}
          material={materials["Material.005"]}
          position={[5.592, 1.859, 0.238]}
          rotation={[-1.57, -0.112, 1.582]}
          scale={0.362}
        />
        <mesh
          name="Plano"
          castShadow
          receiveShadow
          geometry={nodes.Plano.geometry}
          material={materials.pared_invisible}
          position={[-0.92, 3.215, 6.025]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[9.974, 1, 3.443]}
        />
        <group
          name="planta"
          position={[7.598, 1.548, -5.292]}
          rotation={[-1.566, 0.014, -3.082]}
          scale={0.436}
        >
          <mesh
            name="Cylinder003_0"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_0.geometry}
            material={materials.Mat1}
          />
          <mesh
            name="Cylinder003_0_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_0_1.geometry}
            material={materials.hojas}
          />
        </group>
        <mesh
          name="techo_marco"
          castShadow
          receiveShadow
          geometry={nodes.techo_marco.geometry}
          material={materials["Mat1.001"]}
          position={[-0.869, 6.149, 3.211]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={3.491}
        />
        <mesh
          name="puerta"
          castShadow
          receiveShadow
          geometry={nodes.puerta.geometry}
          material={materials["Material.010"]}
          position={[0.757, 2.677, 12.856]}
          rotation={[-Math.PI / 2, 0, 1.575]}
          scale={[0.113, 0.113, 0.108]}
        />
        <mesh
          name="Suelo"
          castShadow
          receiveShadow
          geometry={nodes.Suelo.geometry}
          material={materials.floor}
          position={[-0.873, -0.016, 3.32]}
          scale={[10.049, 1.093, 6.29]}
        />
        <mesh
          name="tv_screen"
          castShadow
          receiveShadow
          geometry={nodes.tv_screen.geometry}
          material={materials.parallel}
          position={[-6.579, 3.678, -6.062]}
          rotation={[Math.PI / 2, 0, 0.001]}
          scale={[3.458, 3.919, 3.982]}
          onClick={handleOnClick}
          onPointerEnter={handleOnPointerEnter}
          onPointerLeave={handleOnPointerLeave}
        />
        <group
          name="Foco"
          position={[-0.058, 6.088, 0.092]}
          rotation={[-0.019, -0.156, 0.018]}
          scale={0.534}
        />
        <group
          name="tv_marco"
          position={[-6.56, 3.679, -6.284]}
          scale={[3.939, 2.314, 0.246]}
        >
          <mesh
            name="Cubo011"
            castShadow
            receiveShadow
            geometry={nodes.Cubo011.geometry}
            material={materials.tvblack}
          />
          <mesh
            name="Cubo011_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo011_1.geometry}
            material={materials.logo}
          />
        </group>
        <mesh
          name="lampara_techo"
          castShadow
          receiveShadow
          geometry={nodes.lampara_techo.geometry}
          material={materials.vidroFoco}
          position={[-0.008, 6.352, 0.239]}
          rotation={[0, -0.54, Math.PI]}
          scale={[0.493, 0.048, 0.493]}
        />
        <mesh
          name="mesita"
          castShadow
          receiveShadow
          geometry={nodes.mesita.geometry}
          material={materials.Mat1}
          position={[-6.443, 0.463, 0.46]}
          scale={[0.551, 0.487, 0.487]}
        />
        <group
          name="room"
          position={[-0.838, 3.359, -0.167]}
          scale={[14.14, 5.354, 6.28]}
        >
          <mesh
            name="Cubo"
            castShadow
            receiveShadow
            geometry={nodes.Cubo.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Cubo_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo_1.geometry}
            material={materials.techo}
          />
        </group>
        <mesh
          name="nodo_nosotros"
         
          geometry={nodes.nodo_nosotros.geometry}
          material={ new THREE.MeshStandardMaterial({color: 0xD6D6D6, toneMapped: false, emissive:"#00D1FF", emissiveIntensity:0}) }
          position={[-1.54, 2.779, -6.203]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.468, 0.113, 0.468]}
          onClick={handleOnClick}
          onPointerEnter={handleOnPointerEnter}
          onPointerLeave={handleOnPointerLeave}
        />
        <mesh
          name="nodo_proyectos"
 
          geometry={nodes.nodo_proyectos.geometry}
          material={ new THREE.MeshStandardMaterial({color: 0xD6D6D6, toneMapped: false, emissive:"#00D1FF", emissiveIntensity:0}) }
          position={[-0.047, 4.677, -6.142]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.468, 0.113, 0.468]}
          onClick={handleOnClick}
          onPointerEnter={handleOnPointerEnter}
          onPointerLeave={handleOnPointerLeave}
        />
        <mesh
          name="nodo_servicios"

          geometry={nodes.nodo_servicios.geometry}
          material={ new THREE.MeshStandardMaterial({color: 0xD6D6D6, toneMapped: false, emissive:"#00D1FF", emissiveIntensity:0}) }
          position={[2.399, 0.858, -6.142]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.468, 0.113, 0.468]}
          onClick={handleOnClick}
          onPointerEnter={handleOnPointerEnter}
          onPointerLeave={handleOnPointerLeave}
        />
        <mesh
          name="nodo_contacto"
       
          geometry={nodes.nodo_contacto.geometry}
          material={ new THREE.MeshStandardMaterial({color: 0xD6D6D6, toneMapped: false, emissive:"#00D1FF", emissiveIntensity:0}) }
          position={[4.004, 2.308, -6.142]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.468, 0.113, 0.468]}
          onClick={handleOnClick}
          onPointerEnter={handleOnPointerEnter}
          onPointerLeave={handleOnPointerLeave}
        />
        <mesh
          name="nodo_desarrollo"
   
          geometry={nodes.nodo_desarrollo.geometry}
          material={ new THREE.MeshStandardMaterial({color: 0xD6D6D6, toneMapped: false, emissive:"#00D1FF", emissiveIntensity:0}) }
          position={[3.318, 4.605, -6.142]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.468, 0.113, 0.468]}
          onClick={handleOnClick}
          onPointerEnter={handleOnPointerEnter}
          onPointerLeave={handleOnPointerLeave}
        />
        <group
          name="Círculo002"
          position={[-0.011, 6.322, 0.231]}
          scale={0.434}
        >
          <mesh
            name="Círculo"
            castShadow
            receiveShadow
            geometry={nodes.Círculo.geometry}
            material={materials.white}
          />
          <mesh
            name="Círculo_1"
            castShadow
            receiveShadow
            geometry={nodes.Círculo_1.geometry}
            material={materials.tvblack}
          />
        </group>
        <mesh
          name="ventana_marco"
          castShadow
          receiveShadow
          geometry={nodes.ventana_marco.geometry}
          material={materials.tvblack}
          position={[8.673, 3.421, 0.044]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[4.978, 2.302, 0.297]}
        />
        <mesh
          name="galaxia_marco"
          castShadow
          receiveShadow
          geometry={nodes.galaxia_marco.geometry}
          material={materials.tvblack}
          position={[-10.74, 3.491, 0.1]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[2.592, 1.54, 0.067]}
        />

        <mesh
          name="nodo_speedtest"
       
          geometry={nodes.nodo_speedtest.geometry}
          material={ new THREE.MeshStandardMaterial({color: 0xD6D6D6, toneMapped: false, emissive:"#00D1FF", emissiveIntensity:0}) }
          position={[-0.54, 1.031, -6.026]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.468, 0.113, 0.468]}
          onClick={handleOnClick}
          onPointerEnter={handleOnPointerEnter}
          onPointerLeave={handleOnPointerLeave}
        > 
        
         </mesh>
        <mesh
          name="Boton"
        
          geometry={nodes.Boton.geometry}
          material={ new THREE.MeshBasicMaterial({color: 0x000fff, toneMapped: false }) }
          position={[-12.386, 2.027, 0.137]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.305, 0.046, 0.112]}
          onClick={handleOnClick}
          onPointerEnter={handleOnPointerEnter}
          onPointerLeave={handleOnPointerLeave}
        />
        <mesh
          name="galaxia"
       
          geometry={nodes.galaxia.geometry}
          material={materials.galaxia}
          position={[-11.83, 4.311, 0.169]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[7.756, 3.735, 3.735]}
        />
        <mesh
          name="planetas"
        
          geometry={nodes.planetas.geometry}
          material={materials.bakedPlanets}
          position={[-12.372, 3.514, 1.788]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.087}
        />
        <mesh
          name="indicadores"
         
          geometry={nodes.indicadores.geometry}
          material={materials.screengrid}
          position={[-12.467, 2.551, -0.003]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.425, 0.335, 0.26]}
        />
        <mesh
          name="universe"
       
          geometry={nodes.universe.geometry}
          material={materials.universe}
          position={[-13.063, 3.335, 0.161]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[4.912, 3.557, 4.708]}
        />
        <mesh
          name="satelite"
        
          geometry={nodes.satelite.geometry}
          material={materials.bakedPlanets}
          position={[-12.214, 3.56, 0.529]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.1}
        />
        <mesh
          name="astronauta"
          
          geometry={nodes.astronauta.geometry}
          material={materials.bakedPlanets}
          position={[-12.207, 3.504, -0.089]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.096}
        />
      </group>
    </group>
  </>
  
});

useGLTF.preload("./models/test.gltf");
export default Officina;