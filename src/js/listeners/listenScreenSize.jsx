import globalVariables from '../globals.js';
import {Suspense, useRef, useState, useEffect } from 'react'; 

export default function ScreenSizeListener ({camera, modelRef, menuTextRef}) {



    const [windowSize, setWindowSize] = useState(getWindowSize());



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
    const nodoSpeedTest = modelRef.current.children[0].getObjectByName("nodo_speedtest");
    const nodoContacto = modelRef.current.children[0].getObjectByName("nodo_contacto");
    const nodoServicios = modelRef.current.children[0].getObjectByName("nodo_servicios");
    const nodoDesarrollo = modelRef.current.children[0].getObjectByName("nodo_desarrollo");
    const nodoProyectos = modelRef.current.children[0].getObjectByName("nodo_proyectos");
    const logo_cbluna = modelRef.current.children[0].getObjectByName("logo_cbluna");



   

 
 
    if (newSize.width <= 425) {
    camera.current.position.set(6, 3, 6.3);
    camera.current.zoom=1.5;
    camera.current.fov=45;
    /* ESCALAS */
    logo_cbluna.scale.set(25,25,25);
    nodoNosotros.scale.set(0.37,0.37,0.37);
    nodoSpeedTest.scale.set(0.37,0.37,0.37);
    nodoContacto.scale.set(0.37,0.37,0.37);
    nodoServicios.scale.set(0.37,0.37,0.37);
    nodoDesarrollo.scale.set(0.37,0.37,0.37);
    nodoProyectos.scale.set(0.37,0.37,0.37);

    
    /* POSICIONES */

    logo_cbluna.position.set(1, 3, -5);
    nodoProyectos.position.set(1, 5, -6.15);
    nodoSpeedTest.position.set(1, 0.5, -6.15);

    nodoNosotros.position.set(3, 5, -6.203);
    nodoDesarrollo.position.set(3, 3.5, -6.203);
    nodoContacto.position.set(3, 2, -6.203);
    nodoServicios.position.set(3, 0.5, -6.203);

    } 
    else if (newSize.width <= 768) {
    camera.current.position.set(6, 3, 6.3);
    camera.current.fov=45;
    camera.current.zoom=1.5;

    /* ESCALAS */
    logo_cbluna.scale.set(28,28,28);
    nodoNosotros.scale.set(0.40,0.40,0.40);
    nodoSpeedTest.scale.set(0.40,0.40,0.40);
    nodoContacto.scale.set(0.40,0.40,0.40);
    nodoServicios.scale.set(0.40,0.40,0.40);
    nodoDesarrollo.scale.set(0.40,0.40,0.40);
    nodoProyectos.scale.set(0.40,0.40,0.40);

     /* POSICIONES */

     logo_cbluna.position.set(1, 3, -5);
     nodoProyectos.position.set(1, 5, -6.15);
     nodoSpeedTest.position.set(1, 0.5, -6.15);

    nodoNosotros.position.set(3, 5, -6.203);
    nodoDesarrollo.position.set(3, 3.5, -6.203);
    nodoContacto.position.set(3, 2, -6.203);
    nodoServicios.position.set(3, 0.5, -6.203);
    } 
    else if (newSize.width <= 1024) {
    camera.current.position.set(7.3, 3, 6.3);
    camera.current.fov=45;
    nodoNosotros.position.set(-1.54, 2.779, -6.203);
     
    } else {
    camera.current.position.set(2, 3, 6.3);
    camera.current.fov=45;  
    nodoNosotros.position.set(-1.54, 2.779, -6.203);
    logo_cbluna.position.set(1.977, 3.198, -6.189);
    logo_cbluna.scale.set(41.747,41.747,41.747);
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
