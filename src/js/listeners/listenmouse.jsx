import globalVariables from '../globals.js';
import {AnimationsGsap} from '../animations.js';


export default function MouseListener ({camera}) {


    const animationOrder = [
        'animationToMainMenu',
        'animationToNosotros',
        'animationToGalaxy',
        'animationToTelevisor',
        'animationToTelevisorZoom',
        'animationToRoot'
    ];
    let currentIndex = animationOrder.length - 1;  // Iniciar en la primera animación
    const animationsGsap = new AnimationsGsap();
  
    

        window.addEventListener('wheel', (_event) => {
         
            if(!globalVariables.listenMouseWheel) return;
            if (_event.deltaY < 0) { 
                currentIndex = (currentIndex - 1 + animationOrder.length) % animationOrder.length;
            } else if (_event.deltaY > 0) { // scrolling down
                currentIndex = (currentIndex + 1) % animationOrder.length;
            }

            const animationName = animationOrder[currentIndex];
            executeAnimation(animationName);
        });
    

    function executeAnimation(animationName) {
        switch (animationName) {
            case 'animationToMainMenu':
               
                animationsGsap.animationToMainMenu(camera.current);
                break;
            case 'animationToNosotros':
             
                animationsGsap.animationToNosotros(camera.current);
                break;
            case 'animationToGalaxy':
          
                animationsGsap.animationToGalaxy(camera.current);
                break;
            case 'animationToTelevisor':
         
                animationsGsap.animationToTelevisor(camera.current);
                break;
            case 'animationToTelevisorZoom':
        
                animationsGsap.animationToTelevisorZoom(camera.current);
                break;
            case 'animationToRoot':
         
                animationsGsap.animationToRoot(camera.current);
                break;
            default:
                console.log('Animación desconocida:', animationName);
        }
    }

    return
}
