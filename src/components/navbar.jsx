import React from 'react';


export default function Navbar  ({ scrollToSection })  {
  return (
    <>
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Mi Sitio Web</div>
        <div className="hidden md:flex space-x-4">
        <a href="#" className="hover:underline" onClick={() => scrollToSection(universeRef)}>Home</a>
          <a href="#" className="hover:underline" onClick={() => scrollToSection(plane11Ref)}>Nosotros</a>
          <a href="#" className="hover:underline" onClick={() => scrollToSection(cuboRef)}>Proyectos</a>
          <a href="#" className="hover:underline" onClick={() => scrollToSection(confetiRef)}>Servicios</a>
          <a href="#" className="hover:underline" onClick={() => scrollToSection(partyRef)}>Contacto</a>
        </div>
        <div className="md:hidden">
          {/* Icono de menú responsive */}
          <svg className="h-6 w-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
      </div>
    </nav>
  </>
  );
};


