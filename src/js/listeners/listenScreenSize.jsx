import globalVariables from '../globals.js';
import {Suspense, useRef, useState, useEffect } from 'react'; 

export default function ScreenSizeListener ({camera, modelRef}) {



    const [windowSize, setWindowSize] = useState(getWindowSize());
    let getNosotros;

    //extract mesh with name "nodo_nosotros" from model current.children[0]
  /*   const nodoNosotros = modelRef.curent.children[0].getObjectByName("nodo_nosotros"); */
  
    
    function getNodes() {
     /*    console.log(modelRef.current.children[0].getObjectByName("nodo_nosotros")); */
       const nodoNosotros = modelRef.current.children[0].getObjectByName("nodo_nosotros");
       return nodoNosotros;
    }


 // Función para obtener el tamaño de la ventana actual
 function getWindowSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
 
  // Función para manejar el cambio de tamaño de la ventana
  function handleResize() {
    const newSize = getWindowSize();
    setWindowSize(newSize);

    const nodoNosotros = modelRef.current.children[0].getObjectByName("nodo_nosotros");
   

 
 
    if (newSize.width <= 425) {
      camera.current.position.set(6, 3, 6.3);
      camera.current.fov=55;
      nodoNosotros.position.set(2, 2.779, -6.203);
    } 
    else if (newSize.width <= 768) {
      camera.current.position.set(6, 3, 6.3);
      camera.current.fov=50;
      nodoNosotros.position.set(2, 2.779, -6.203);
    } 
    else if (newSize.width <= 1024) {
     camera.current.position.set(7.3, 3, 6.3);
     camera.current.fov=45;
     nodoNosotros.position.set(-1.54, 2.779, -6.203);
     
    } else {
     camera.current.position.set(2, 3, 6.3);
        camera.current.fov=45;  
    nodoNosotros.position.set(-1.54, 2.779, -6.203);
    }
  }
 
  useEffect(() => {
  

    // Agregar un event listener para el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);
 
    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 

   

    return
}
