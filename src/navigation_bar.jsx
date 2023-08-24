import React, { useEffect } from 'react';
import { createNavigationBar, setActivePoint } from './js/barra_navegacion';
import { useThree } from '@react-three/fiber';

export default function NavigationBar() {
  const { gl } = useThree();

  useEffect(() => {
    // Crear la estructura de navegación
    createNavigationBar();

    // Manejar la activación de puntos según la animación actual
    setActivePoint('animationToRoot'); // Establece el punto activo inicial

    // Agregar event listener para cambiar puntos activos en función de la animación
    gl.domElement.addEventListener('animationChange', handleAnimationChange);

    return () => {
      gl.domElement.removeEventListener('animationChange', handleAnimationChange);
    };
  }, [gl]);

  const handleAnimationChange = (event) => {
    const animationName = event.detail.animationName;
    setActivePoint(animationName);
  };

  return null; // El componente no renderiza nada visualmente
}
