
import { useAnimations, useGLTF } from '@react-three/drei'
import React from 'react'
import { useEffect } from 'react'


export default function Cbl(props)
{

  const handleOnClick = (intersect) => {
    

    intersect.stopPropagation();
    start();
    
   /*  console.log(intersect);
    console.log(intersect.object.name); */
};

const handleOnPointerEnter = (intersect) => {
  intersect.stopPropagation() 
  document.body.style.cursor = 'pointer';
};

const handleOnPointerLeave = (intersect) => {
  intersect.stopPropagation() 
    document.body.style.cursor = 'default';
};


  
    const { nodes, materials } = useGLTF("./models/cbl.gltf", true);


    return (
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Plano.geometry}
          material={materials.Material}
          scale={[19.81, 25.472, 25.472]}
        />
        <mesh
          geometry={nodes.grafico.geometry}
          material={nodes.grafico.material}
          position={[2.841, 1.036, -0.123]}
          scale={[0.265, 1.044, 0.339]}
        />
        <mesh
          geometry={nodes.Plano001.geometry}
          material={nodes.Plano001.material}
          position={[-1.533, 0.511, -11.687]}
          scale={[2.437, 1.004, 1.004]}
        />
        <mesh
          geometry={nodes.Plano003.geometry}
          material={nodes.Plano003.material}
          position={[2.867, 0.511, -12.759]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[2.096, 0.864, 1.78]}
        />
        <mesh
          geometry={nodes.Plano004.geometry}
          material={nodes.Plano004.material}
          position={[3.451, 0.873, -14.799]}
          scale={[0.82, 0.675, 0.359]}
        />
        <mesh
          geometry={nodes.Plano005.geometry}
          material={nodes.Plano005.material}
          position={[0.189, 0.511, -1.117]}
          scale={[4.494, 1.852, 2.449]}
        />
        <mesh
          geometry={nodes.Plano006.geometry}
          material={nodes.Plano006.material}
          position={[-3.53, 0.907, -3.779]}
          scale={[0.82, 0.675, 0.359]}
        />
        <mesh
          geometry={nodes.Plano007.geometry}
          material={nodes.Plano007.material}
          position={[-2.798, 0.511, 4.522]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1.866, 0.847, 1.334]}
        />
        <mesh
          geometry={nodes.Plano008.geometry}
          material={nodes.Plano008.material}
          position={[0.142, 0.511, 4.522]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1.866, 0.847, 1.334]}
        />
        <mesh
          geometry={nodes.Plano009.geometry}
          material={nodes.Plano009.material}
          position={[2.998, 0.511, 4.522]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1.866, 0.847, 1.334]}
        />
        <mesh
          geometry={nodes.Plano002.geometry}
          material={nodes.Plano002.material}
          position={[-1.533, 0.511, -13.832]}
          scale={[2.437, 1.004, 1.004]}
        />
        <mesh
          geometry={nodes.Plano011.geometry}
          material={nodes.Plano011.material}
          position={[2.136, 0.873, -19.144]}
          scale={[0.82, 0.675, 0.359]}
        />
        <mesh
          geometry={nodes.Plano012.geometry}
          material={nodes.Plano012.material}
          position={[-1.617, 0.873, -19.144]}
          scale={[0.82, 0.675, 0.359]}
        />
        <mesh
          geometry={nodes.prueba_tu_internet.geometry}
          material={materials.emisive_white}
          position={[0.142, 0.749, -22.625]}
          scale={0.533}
        />
        <mesh
          geometry={nodes.subida.geometry}
          material={materials.emisive_white}
          position={[2.171, 0.713, -19.631]}
          scale={0.482}
        />
        <mesh
          geometry={nodes.bajada.geometry}
          material={materials.emisive_white}
          position={[-1.554, 0.713, -19.668]}
          scale={0.482}
        />
        <mesh
          geometry={nodes.universe.geometry}
          material={materials.universe}
          position={[0.209, 0.097, -20.724]}
          scale={[9.826, 7.174, 9.495]}
        />
        <mesh
          geometry={nodes.Iniciar.geometry}
          material={materials.emisive_white}
          position={[-0.179, 1.163, -17.804]}
          scale={0.367}
        />
        <mesh
          geometry={nodes.galaxia.geometry}
          material={materials.galaxia}
          position={[0.192, 2.158, -22.693]}
          scale={[15.642, 7.533, 7.533]}
        />
        <mesh
          geometry={nodes.planetas.geometry}
          material={materials.bakedPlanets}
          position={[-3.072, 1.065, -21.086]}
          scale={0.176}
        />
        <mesh
          geometry={nodes.Cubo.geometry}
          material={materials.blue}
          position={[0.257, 1.037, -17.897]}
          scale={[0.616, 0.093, 0.227]}
          onClick={handleOnClick}
          onPointerEnter={handleOnPointerEnter}
          onPointerLeave={handleOnPointerLeave}
        />
        <mesh
          geometry={nodes.confeti.geometry}
          material={materials.confeti}
          position={[0.207, 0.422, 4.345]}
          scale={[12.033, 4.153, 5.473]}
        />
        <mesh
          geometry={nodes.ticket.geometry}
          material={materials.ticket}
          position={[-3.228, 1.062, 2.018]}
          scale={[1.453, 1, 1]}
        />
        <mesh
          geometry={nodes.Texto.geometry}
          material={materials.emisive_white}
          position={[-3.824, 1.096, 2.147]}
          scale={0.378}
        />
        <mesh
          geometry={nodes.spotLight.geometry}
          material={materials.spotLight}
          position={[3.942, 1.926, 2.947]}
          rotation={[0, 0.168, 0]}
          scale={1.401}
        />
        <mesh
          geometry={nodes.spotLight001.geometry}
          material={materials.spotLight}
          position={[-3.616, 1.926, 2.947]}
          rotation={[-Math.PI, 0.456, -Math.PI]}
          scale={1.401}
        />
        <mesh
          geometry={nodes.party.geometry}
          material={materials.party}
          position={[0.164, 1.146, 6.955]}
          scale={[3.047, 1.96, 2.861]}
        />
      </group>
    );
  
}

useGLTF.preload("./models/cbl.gltf");
