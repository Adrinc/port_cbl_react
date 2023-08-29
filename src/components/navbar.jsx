import React,{ useState } from 'react';

export default function Navbar({ scrollToSection }) {

  const [selectedSection, setSelectedSection] = useState('Inicio'); // Estado para la sección seleccionada

  const handleSectionClick = (sectionName) => {
    setSelectedSection(sectionName);
    // Aquí puedes realizar acciones adicionales como desplazarte a la sección correspondiente
  };

  return (
    <nav className="bg-black text-white p-2 absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="./imagenes/logos/cbluna.png"
            alt="Mi Logo"
            className="h-10 w-15 mr-2"
          />
        {/*   <div className="text-xl font-bold">Cb</div> */}
        </div>
        <div className="hidden md:flex space-x-4">
{/*           <a href="#" className="hover:underline" onClick={() => scrollToSection(universeRef)}>Inicio</a>
          <a href="#" className="hover:underline" onClick={() => scrollToSection(plane11Ref)}>Nosotros</a>
          <a href="#" className="hover:underline" onClick={() => scrollToSection(cuboRef)}>Proyectos</a>
          <a href="#" className="hover:underline" onClick={() => scrollToSection(confetiRef)}>Servicios</a>
          <a href="#" className="hover:underline" onClick={() => scrollToSection(partyRef)}>Contacto</a> */}

          <div className="hidden md:flex space-x-5 font-medium">
          <a href="#" className={`hover:underline ${selectedSection === 'Inicio' ? 'text-blue-500' : ''}`} onClick={() => handleSectionClick('Inicio')} style={{ fontFamily: 'Sora' }}> Inicio</a>
          <a href="#" className={`hover:underline ${selectedSection === 'Nosotros' ? 'text-blue-500' : ''}`} onClick={() => handleSectionClick('Nosotros')} style={{ fontFamily: 'Sora' }}> Nosotros</a>
          <a href="#" className={`hover:underline ${selectedSection === 'Proyectos' ? 'text-blue-500' : ''}`} onClick={() => handleSectionClick('Proyectos')} style={{ fontFamily: 'Sora' }}> Proyectos</a>
          <a href="#" className={`hover:underline ${selectedSection === 'Servicios' ? 'text-blue-500' : ''}`} onClick={() => handleSectionClick('Servicios')} style={{ fontFamily: 'Sora' }}>Servicios</a>
          <a href="#" className={`hover:underline ${selectedSection === 'Contacto' ? 'text-blue-500' : ''}`} onClick={() => handleSectionClick('Contacto')} style={{ fontFamily: 'Sora' }}> Contacto</a>
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


