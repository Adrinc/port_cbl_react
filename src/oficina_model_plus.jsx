/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationsGsap } from "./js/animations.js";
import globalVariables from './js/globals.js';


export default function Officina(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/test.gltf");
  const { actions } = useAnimations(animations, group);
  const animationsGsap = new AnimationsGsap(actions);



  const handleOnClick = (intersect) => {
    

    intersect.stopPropagation() 
    console.log(intersect.object.material.color);

    switch (intersect.object.name) {
      case "tv_screen":
        globalVariables.nowWatching == 'animationToTelevisor'? animationsGsap.animationToTelevisorZoom(intersect.camera) : animationsGsap.animationToTelevisor(intersect.camera);
        break;
      case "nodo_nosotros":
        animationsGsap.animationToNosotros(intersect.camera);
        break;
      case "nodo_proyectos":
        animationsGsap.animationToGalaxy(intersect.camera);
        break;
      case "nodo_servicios":
        animationsGsap.nodo_servicios();
        break;
      case "nodo_contacto":
        animationsGsap.nodo_contacto();
        break;
      case "nodo_desarrollo":
        animationsGsap.nodo_desarrollo();
        break;
      case "Boton":
        //start actions
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
  intersect.stopPropagation() 
  document.body.style.cursor = 'pointer';
};

const handleOnPointerLeave = (intersect) => {
  intersect.stopPropagation() 
    document.body.style.cursor = 'default';
};

  



  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="logo_cbluna"
          castShadow
          receiveShadow
          geometry={nodes.logo_cbluna.geometry}
          material={materials.luna}
          position={[1.977, 3.369, -6.189]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={44.087}
        />
        <mesh
          name="sillon"
          castShadow
          receiveShadow
          geometry={nodes.sillon.geometry}
          material={materials.Material_2146932551}
          position={[-6.562, 0.801, 0.394]}
          rotation={[-Math.PI / 2, 0, 0.023]}
          scale={0.002}
        />
        <mesh
          name="ciudad"
          castShadow
          receiveShadow
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
          <mesh
            name="Object_12_4"
            castShadow
            receiveShadow
            geometry={nodes.Object_12_4.geometry}
            material={materials["Material.005"]}
          />
        </group>
        <group
          name="switch"
          position={[6.494, 3.233, -6.15]}
          rotation={[-1.471, 0, 0]}
          scale={[0.276, 0.112, 0.275]}
        >
          <mesh
            name="Switch_Mat3_0"
            castShadow
            receiveShadow
            geometry={nodes.Switch_Mat3_0.geometry}
            material={materials.Mat3}
          />
          <mesh
            name="Switch_Mat3_0_1"
            castShadow
            receiveShadow
            geometry={nodes.Switch_Mat3_0_1.geometry}
            material={materials.Mat1}
          />
          <mesh
            name="Switch_Mat3_0_2"
            castShadow
            receiveShadow
            geometry={nodes.Switch_Mat3_0_2.geometry}
            material={materials.Mat2}
          />
        </group>
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
          position={[-0.93, 0.019, 3.215]}
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
          position={[-6.443, 0.518, 0.46]}
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
          castShadow
          receiveShadow
          geometry={nodes.nodo_nosotros.geometry}
          material={nodes.nodo_nosotros.material}
          position={[-1.62, 2.779, -6.203]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.468, 0.113, 0.468]}
          onClick={handleOnClick}
          onPointerEnter={handleOnPointerEnter}
          onPointerLeave={handleOnPointerLeave}
        />
        <mesh
          name="nodo_proyectos"
          castShadow
          receiveShadow
          geometry={nodes.nodo_proyectos.geometry}
          material={nodes.nodo_proyectos.material}
          position={[0.176, 4.612, -6.142]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.468, 0.113, 0.468]}
          onClick={handleOnClick}
          onPointerEnter={handleOnPointerEnter}
          onPointerLeave={handleOnPointerLeave}
        />
        <mesh
          name="Opciones"
          castShadow
          receiveShadow
          geometry={nodes.Opciones.geometry}
          material={materials.luna}
          position={[1.143, 1.573, -6.131]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.47}
        />
        <mesh
          name="nodo_servicios"
          castShadow
          receiveShadow
          geometry={nodes.nodo_servicios.geometry}
          material={nodes.nodo_servicios.material}
          position={[1.02, 0.858, -6.142]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.468, 0.113, 0.468]}
        />
        <mesh
          name="nodo_contacto"
          castShadow
          receiveShadow
          geometry={nodes.nodo_contacto.geometry}
          material={nodes.nodo_contacto.material}
          position={[4.004, 1.877, -6.142]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.468, 0.113, 0.468]}
        />
        <mesh
          name="nodo_desarrollo"
          castShadow
          receiveShadow
          geometry={nodes.nodo_desarrollo.geometry}
          material={nodes.nodo_desarrollo.material}
          position={[3.859, 4.16, -6.142]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.468, 0.113, 0.468]}
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
          name="Boton"
       
          geometry={nodes.Boton.geometry}
          material={materials.blue}
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
  );
}

useGLTF.preload("./models/test.gltf");
