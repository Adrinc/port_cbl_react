// Crear la estructura de navegación

export function createNavigationBar() {
    const navigationBar = document.getElementById("navigationbar");

    const points = [
        { id: 'animationToRoot', name: 'Inicio' },
        { id: 'animationToMainMenu', name: 'Menú Principal' },
        { id: 'animationToProyectos', name: 'Proyectos' },
        { id: 'animationToGalaxy', name: 'Speed test' },
        { id: 'animationToTelevisor', name: 'Televisor' },
        { id: 'animationToTelevisorZoom', name: 'Televisor Zoom' }
    ];

    points.forEach(point => {
        const div = document.createElement('div');
        div.className = 'nav-point-container'; // Clase para contener punto y texto

        const pointDiv = document.createElement('div');
        pointDiv.className = 'nav-point';
        pointDiv.id = `point-${point.id}`;
        div.appendChild(pointDiv);

        const textDiv = document.createElement('div');
        textDiv.className = 'nav-text';
        textDiv.id = `text-${point.id}`;
        textDiv.innerText = point.name;
        div.appendChild(textDiv);

        navigationBar.appendChild(div);
    });

}

export function setActivePoint(animationName) {
    // Remueve la clase 'active' de todos los puntos y textos
    document.querySelectorAll('.nav-point, .nav-text').forEach(element => {
        element.classList.remove('active');
    });

    // Agrega la clase 'active' al punto y texto correspondientes
    const activePointId = `point-${animationName}`;
    const activeTextId = `text-${animationName}`;
    const activePoint = document.getElementById(activePointId);
    const activeText = document.getElementById(activeTextId);
    if (activePoint && activeText) {
        activePoint.classList.add('active');
        activeText.classList.add('active');
    }
}
