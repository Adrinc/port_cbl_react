import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimationsGsap } from '../js/animations';

export default function Navbar({ camera }) {

  console.log(camera);

  const animations = new AnimationsGsap();

  const [selectedSection, setSelectedSection] = useState('Inicio'); // Estado para la sección seleccionada

  const handleSectionClick = (sectionName) => {
    setSelectedSection(sectionName);
    switch (sectionName) {
      case "Inicio":
          animations.animationToRoot( camera.current);
          break;
      case "SpeedTest":
         
          animations.animationToGalaxy( camera.current);
          break;
      case "Nosotros":
         
          animations.animationToNosotros( camera.current);
          break;
      case "Servicios":
          console.log("servicios");
          break;
      case "contacto":

          break;
      default:
          break;
  }



  };

  return (
    <nav className="bg-black text-white p-1 absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        </div>
        <div className="hidden md:flex space-x-4">

          <div className="hidden md:flex space-x-5 font-medium">
          <Link to="/" className={`hover:underline ${selectedSection === 'Inicio' ? 'text-blue-500' : ''}`} onClick={() => handleSectionClick('Inicio')} style={{ fontFamily: 'Sora' }}> Inicio</Link>
          <Link to="/SpeedTest" className={`hover:underline ${selectedSection === 'SpeedTest' ? 'text-blue-500' : ''}`} onClick={() => handleSectionClick('SpeedTest')} style={{ fontFamily: 'Sora' }}> SpeedTest</Link>
          <Link to="/nosotros" className={`hover:underline ${selectedSection === 'Nosotros' ? 'text-blue-500' : ''}`} onClick={() => handleSectionClick('Nosotros')} style={{ fontFamily: 'Sora' }}> Nosotros</Link>
          <Link to="/proyectos" className={`hover:underline ${selectedSection === 'Proyectos' ? 'text-blue-500' : ''}`} onClick={() => handleSectionClick('Proyectos')} style={{ fontFamily: 'Sora' }}> Proyectos</Link>
          <Link to="/servicios" className={`hover:underline ${selectedSection === 'Servicios' ? 'text-blue-500' : ''}`} onClick={() => handleSectionClick('Servicios')} style={{ fontFamily: 'Sora' }}> Servicios</Link>
          <Link to="/contacto" className={`hover:underline ${selectedSection === 'Contacto' ? 'text-blue-500' : ''}`} onClick={() => handleSectionClick('Contacto')} style={{ fontFamily: 'Sora' }}> Contacto</Link>
        </div>

        </div>
        <div className="md:hidden">
          {/* Icono de menú responsive */}
          <svg className="h-6 w-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
}


