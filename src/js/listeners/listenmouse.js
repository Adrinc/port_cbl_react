import globalVariables from '../functions/global.js';

import {
    esferaGroup, animate, camera, scene, currentIntersect, mouse, sizes
} from '../../script.js';
import {AnimationsGsap} from '../functions/animations.js';

const animationOrder = [
    'animationToMainMenu',
    'animationToProyectos',
    'animationToGalaxy',
    'animationToTelevisor',
    'animationToTelevisorZoom',
    'animationToRoot'
];

let currentIndex = animationOrder.length - 1;  // Iniciar en la primera animación
const animationsGsap = new AnimationsGsap();

export class MouseListener {

    mouseHover() {
        let lastMouseX;
        let lastMouseY;

        window.addEventListener("mousemove", (_event) => {
            mouse.x = _event.clientX / sizes.width * 2 - 1;
            mouse.y = -(_event.clientY / sizes.height) * 2 + 1;
        });

        function updateCameraPosition(event) {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

            lastMouseX = mouseX;
            lastMouseY = mouseY;

        }
        window.addEventListener('mousemove', updateCameraPosition);
    }
    mouseScrollYListener() {
        window.addEventListener('wheel', (_event) => {
            if(!globalVariables.listenMouseWheel) return;
            if (_event.deltaY < 0) { 
                currentIndex = (currentIndex - 1 + animationOrder.length) % animationOrder.length;
            } else if (_event.deltaY > 0) { // scrolling down
                currentIndex = (currentIndex + 1) % animationOrder.length;
            }

            const animationName = animationOrder[currentIndex];
            this.executeAnimation(animationName);
        });
    }

    executeAnimation(animationName) {
        switch (animationName) {
            case 'animationToMainMenu':
                animationsGsap.animationToMainMenu();
                break;
            case 'animationToProyectos':
                animationsGsap.animationToProyectos();
                break;
            case 'animationToGalaxy':
                animationsGsap.animationToGalaxy();
                break;
            case 'animationToTelevisor':
                animationsGsap.animationToTelevisor();
                break;
            case 'animationToTelevisorZoom':
                animationsGsap.animationToTelevisorZoom();
                break;
            case 'animationToRoot':
                animationsGsap.animationToRoot();
                break;
            default:
                console.log('Animación desconocida:', animationName);
        }
    }


}
