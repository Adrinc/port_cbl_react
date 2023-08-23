

/* import {objectsToTest} from '../../script.js'; */



export class GlobalVariables{
    listenMouseWheel = false;
    desactivateHover = true;
    isAnimating = true;
    observing = false;
    nowWatching = 'animationToRoot';
    
    globalEnvIntensity = {envIntensity: 2};
}

let globalVariables = new GlobalVariables();
export default globalVariables;


export function upadateAllMaterials (scene, envMapIntensity) 
{ 
scene.traverse((child) => {
    if (child.isMesh && child.material.isMeshStandardMaterial && !child.name.includes("esfera") && !child.name.includes("box_")) {
    child.material.envMapIntensity = envMapIntensity;
    child.material.wireframe = false;
    child.castShadow = true;
    child.receiveShadow = true;
    
    }
   else if (child.isMesh && child.material.isMeshStandardMaterial && child.name.includes("box_")) {
    child.material.toneMapped = true;
    child.castShadow = false;
    child.receiveShadow = false;

    }
  });
}

export function makeHover(scene){
    scene.traverse((child) => {
    if (child.isMesh && ["nodo_","tv_screen","logo_","switch"].some(x=>child.name.includes(x))) {
        objectsToTest.push(child);
    }
    
  });
}