
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from 'three';

export default function Cbl(props)
{
  const group = useRef();
  
  const { nodes, materials, animations }  = useGLTF("./models/cbl2.gltf", true);
  useGLTF.preload("./models/cbl2.gltf");
  const { actions } = useAnimations(animations, group);


  
  
  useEffect(() =>
  {
    console.log(actions.barra_azulAction._clip)

/*     actions.barra_azulAction.clampWhenFinished = true
    actions.barra_azulAction.loop = THREE.LoopPingPong; 
    actions.barra_azulAction.repetitions = Infinity;
    actions.barra_azulAction.timeScale = 1 */

    actions.barra_azulAction.play();
    actions.barra_verdeAction.play();
    actions.barra_rosaAction.play();
    actions.barra_rojaAction.play();
  
      
  }, [ ])

    const handleOnClick = (intersect) => {
        intersect.stopPropagation();
        start();
        /* animatee(); */
        if (intersect.object.material.color === '#ff0000') {
          intersect.object.material.color.set('"#0000ff"');
        }
        else {intersect.object.material.color.set('#ff0000'); }
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
          name="Plano"
          castShadow
          receiveShadow
          geometry={nodes.Plano.geometry}
          material={materials.Background}
          scale={[19.81, 25.472, 25.472]}
        />
        <mesh
          name="Plano003"
          castShadow
          receiveShadow
          geometry={nodes.Plano003.geometry}
          material={materials.neumorphcon}
          position={[2.867, 0.511, -12.44]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[2.096, 0.864, 1.78]}
        />
        <mesh
          name="Plano005"
          castShadow
          receiveShadow
          geometry={nodes.Plano005.geometry}
          material={materials.neumorphcon}
          position={[0.189, 0.511, -1.117]}
          scale={[4.494, 1.852, 2.449]}
        />
        <mesh
          name="Plano006"
          castShadow
          receiveShadow
          geometry={nodes.Plano006.geometry}
          material={materials.neumorphcon}
          position={[-4.427, 1.262, -3.922]}
          scale={[0.82, 0.675, 0.359]}
        />
        <mesh
          name="Plano007"
          castShadow
          receiveShadow
          geometry={nodes.Plano007.geometry}
          material={materials.neumorphcon}
          position={[0.27, 0.019, 6.668]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1.866, 1.614, 1.334]}
        />
        <mesh
          name="Plano012"
          castShadow
          receiveShadow
          geometry={nodes.Plano012.geometry}
          material={materials.screengrid}
          position={[0.54, 0.873, -19.144]}
          scale={[0.857, 0.675, 0.524]}
        />
        <mesh
          name="Plano004"
          castShadow
          receiveShadow
          geometry={nodes.Plano004.geometry}
          material={materials.neumorphcon}
          position={[-4.427, 1.262, -14.702]}
          scale={[0.82, 0.675, 0.359]}
        />
        <mesh
          name="Plano008"
          castShadow
          receiveShadow
          geometry={nodes.Plano008.geometry}
          material={materials.neumorphcon}
          position={[0.189, 0.511, -6.96]}
          scale={[4.494, 1.852, 2.449]}
        />
        <mesh
          name="Plano009"
          castShadow
          receiveShadow
          geometry={nodes.Plano009.geometry}
          material={materials.neumorphcon}
          position={[-4.427, 1.262, -9.766]}
          scale={[0.82, 0.675, 0.359]}
        />
        <mesh
          name="Plano001"
          castShadow
          receiveShadow
          geometry={nodes.Plano001.geometry}
          material={materials.neumorphcon}
          position={[-4.427, 1.262, 2.117]}
          scale={[0.82, 0.675, 0.359]}
        />
        <mesh
          name="universe"
          castShadow
          receiveShadow
          geometry={nodes.universe.geometry}
          material={materials.universe}
          position={[0.209, 0.097, -20.724]}
          scale={[9.905, 7.174, 9.495]}
        />
        <mesh
          name="galaxia"
          castShadow
          receiveShadow
          geometry={nodes.galaxia.geometry}
          material={materials.galaxia}
          position={[0.192, 2.158, -22.693]}
          scale={[15.642, 7.533, 7.533]}
        />
        <mesh
          name="planetas"
          castShadow
          receiveShadow
          geometry={nodes.planetas.geometry}
          material={materials.bakedPlanets}
          position={[-3.072, 1.065, -21.086]}
          scale={0.176}
        />
        <mesh
          name="Cubo"
          castShadow
          receiveShadow
          geometry={nodes.Cubo.geometry}
          material={materials.blue}
          position={[0.257, 1.037, -17.897]}
          scale={[0.616, 0.093, 0.227]}
          onClick={handleOnClick}
          onPointerEnter={handleOnPointerEnter}
          onPointerLeave={handleOnPointerLeave}
        />
        <group name="Punto" position={[3.797, 10.653, 0.404]} />
        <mesh
          name="grafico"
          castShadow
          receiveShadow
          geometry={nodes.grafico.geometry}
          material={materials.globalcolors}
          position={[2.105, 1.261, -0.399]}
          scale={[0.294, 0.955, 0.31]}
        />
        <mesh
          name="fondoGrafico"
          castShadow
          receiveShadow
          geometry={nodes.fondoGrafico.geometry}
          material={materials.globalcolors}
          position={[2.087, 0.425, -0.972]}
          scale={[1.129, 0.914, 0.914]}
        />
        <mesh
          name="barra_azul"
          castShadow
          receiveShadow
          geometry={nodes.barra_azul.geometry}
          material={materials.globalcolors}
          position={[1.029, 1.269, -0.101]}
          scale={[0.294, 0.955, 0.31]}
        />
        <mesh
          name="barra_verde"
          castShadow
          receiveShadow
          geometry={nodes.barra_verde.geometry}
          material={materials.globalcolors}
          position={[1.558, 1.269, -0.465]}
          scale={[0.294, 0.955, 0.31]}
        />
        <mesh
          name="barra_rosa"
          castShadow
          receiveShadow
          geometry={nodes.barra_rosa.geometry}
          material={materials.globalcolors}
          position={[2.087, 1.269, -0.046]}
          scale={[0.294, 0.955, 0.31]}
        />
        <mesh
          name="barra_roja"
          castShadow
          receiveShadow
          geometry={nodes.barra_roja.geometry}
          material={materials.globalcolors}
          position={[2.616, 1.269, -0.272]}
          scale={[0.294, 0.955, 0.31]}
        />
        <mesh
          name="barra_amarilla"
          castShadow
          receiveShadow
          geometry={nodes.barra_amarilla.geometry}
          material={materials.globalcolors}
          position={[3.144, 1.269, -0.696]}
          scale={[0.294, 0.955, 0.31]}
        />
      </group>
    </group>
    );
  
}


