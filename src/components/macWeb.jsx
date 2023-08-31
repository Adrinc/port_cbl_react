import React from 'react'
import PropTypes from 'prop-types'
import {Html} from '@react-three/drei'

export default function MacWeb(props){



    
    const handleSectionClick = (sectionName) => {
        console.log(sectionName);
    
    
      };
  return (
    <Html {...props}>
<link rel="stylesheet" href="./estilos.css"/>
        

    <nav className="navbar">
      <img src="https://cbluna.com/wp-content/uploads/2021/09/g1250-0.png" alt="Logo" className="logo"/>
        <h1>Nosotros</h1>
    </nav>
    <div className="row">
      <div className="column">
        <img alt="Descripción de la imagen" className="imagen-columna  fade-in "/>
      </div>
      <div className="column">
        <div className="text-container">
          <div className="text-section  fade-in ">
            <h1 className="title"></h1>
            <h2 className="subtitle"></h2>
            <p className="description"></p>
        </div>
        </div>
    </div>
</div>
 
<div className="button-row">
  <button className="button" onClick={() => handleSectionClick('Anterior')}>Anterior</button>
  <button className="button" onClick={() => handleSectionClick('Siguiente')}>Siguiente</button>
</div>

<script src="./nosotros.js"></script>



  
    </Html>

  )
}

