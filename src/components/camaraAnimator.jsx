import React, { useEffect, useRef, useState } from 'react';
import { AnimationsGsap } from '../js/animations';

export default function CameraAnimator(animacion){
   
    const animations = new AnimationsGsap();


        switch (animacion) {
            case "Inicio":

                break;
            case "Nosotros":
                console.log("nosotros");
                animations.nosotros();
                break;
            case "Servicios":
                console.log("servicios");
                break;
            case "contacto":

                break;
            default:
                break;
        }

    return <></>
}

