const datos = [
    {
        imagen: 'https://media.licdn.com/dms/image/C4D03AQE8CH6HZU78Hw/profile-displayphoto-shrink_800_800/0/1659126756880?e=2147483647&v=beta&t=w27drHXe4satB54owJtMkj97H_JQQYuQ_TIK1SE_jXg',
        titulo: 'Erica González',
        subtitulo: 'Analista de Sistemas',
        descripcion: 'Erica González es una destacada Analista de Sistemas con más de 7 años de experiencia en la industria tecnológica. Graduada con honores en Ingeniería Informática, ha trabajado para varias empresas líderes en tecnología, donde ha desempeñado un papel crucial en el análisis, diseño, implementación y mantenimiento de sistemas informáticos.',
      },
    {
        imagen: 'https://img.freepik.com/premium-photo/profile-picture-young-caucasian-male-employee-posing-office-headshot-portrait-smiling-millennial-worker-company-intern-workplace-workspace-employment-leadership-hr-concept_704049-348.jpg',
        titulo: 'Juan Martínez',
        subtitulo: 'Desarrollador Full Stack',
        descripcion: 'Juan es un desarrollador Full Stack con 5 años de experiencia. Especializado en React y Node.js, ha liderado múltiples proyectos exitosos, diseñando e implementando soluciones robustas y eficientes.',
      },
      {
        imagen: 'https://thumbs.dreamstime.com/b/office-worker-pretty-young-sitting-41462649.jpg',
        titulo: 'Sofía Álvarez',
        subtitulo: 'Gerente de Proyecto',
        descripcion: 'Sofía es una Gerente de Proyecto con una fuerte orientación hacia la metodología Agile. Con una experiencia de 8 años, ha coordinado equipos de desarrollo en diversos proyectos, asegurando la entrega a tiempo y la satisfacción del cliente.',
      },
      {
        imagen: 'https://t4.ftcdn.net/jpg/02/58/35/97/360_F_258359723_HIlLA52U0mLQhmrizbBa5Zp9KDVlLefS.jpg',
        titulo: 'David Jiménez',
        subtitulo: 'Ingeniero de QA',
        descripcion: 'David es un Ingeniero de QA dedicado a asegurar la calidad del software. Con 6 años en la industria, se especializa en automatización de pruebas y ha implementado soluciones que han mejorado la eficiencia y confiabilidad del proceso de pruebas.',
      },
      {
        imagen: 'https://thumbs.dreamstime.com/b/headshot-close-up-portrait-smiling-young-indian-woman-look-camera-feel-positive-optimistic-profile-picture-happy-221760047.jpg',
        titulo: 'Laura Sánchez',
        subtitulo: 'Diseñadora de UI/UX',
        descripcion: 'Laura es una talentosa Diseñadora de UI/UX con 4 años de experiencia. Su habilidad para crear interfaces amigables y atractivas ha sido un activo clave en el éxito de numerosos proyectos. Laura colabora estrechamente con los desarrolladores para crear una experiencia óptima para los usuarios.',
      },
      {
        imagen: 'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=170667a&w=0&k=20&c=zeaw4n9tnoCQfJngWFyU0928PQ9X5JC6itdyBnEf3lY=',
        titulo: 'Miguel Rodríguez',
        subtitulo: 'Arquitecto de Software',
        descripcion: 'Miguel es un Arquitecto de Software con 10 años de experiencia en el diseño de arquitecturas escalables y mantenibles. Su liderazgo técnico y comprensión profunda de las tecnologías emergentes han sido fundamentales en la innovación y crecimiento de la compañía.',
      }
    // ... más registros si los hay
  ];

  let indiceActual = 0;

  function actualizarBotones() {
    const botonAnterior = document.querySelector('.button-row button:first-child');
    const botonSiguiente = document.querySelector('.button-row button:last-child');
  
    if (indiceActual <= 0) {
      botonAnterior.disabled = true;
      botonAnterior.classList.add('button-disabled');
    } else {
      botonAnterior.disabled = false;
      botonAnterior.classList.remove('button-disabled');
    }
  
    if (indiceActual >= datos.length - 1) {
      botonSiguiente.disabled = true;
      botonSiguiente.classList.add('button-disabled');
    } else {
      botonSiguiente.disabled = false;
      botonSiguiente.classList.remove('button-disabled');
    }
  }
  
  function actualizarContenido() {
    fadeInAndUpdate();
    document.querySelector('.imagen-columna').src = datos[indiceActual].imagen;
    document.querySelector('.title').innerText = datos[indiceActual].titulo;
    document.querySelector('.subtitle').innerText = datos[indiceActual].subtitulo;
    document.querySelector('.description').innerText = datos[indiceActual].descripcion;
    actualizarBotones(); // Llama a actualizarBotones aquí para manejar el estado de los botones
  }
  
  // Inicializar la página al cargar
  actualizarContenido();
  


  
function fadeInAndUpdate() {
    // Agregar la clase "fade-in" para iniciar la transición de opacidad a 0
    document.querySelector('.imagen-columna').classList.add('fade-in');
    document.querySelector('.text-section').classList.add('fade-in');
  
    // Utilizar un timeout para cambiar el contenido después de que la transición haya comenzado
    setTimeout(() => {
      document.querySelector('.imagen-columna').src = datos[indiceActual].imagen;
      document.querySelector('.title').innerText = datos[indiceActual].titulo;
      document.querySelector('.subtitle').innerText = datos[indiceActual].subtitulo;
      document.querySelector('.description').innerText = datos[indiceActual].descripcion;
  
      // Quitar la clase "fade-in" para que la opacidad vuelva a 1
      document.querySelector('.imagen-columna').classList.remove('fade-in');
      document.querySelector('.text-section').classList.remove('fade-in');
    }, 50); // Puedes ajustar este tiempo para que el contenido cambie justo después de que comience la transición
  
    actualizarBotones(indiceActual);
  }
  
  // Inicializar la página al cargar
  fadeInAndUpdate(); // Asegúrate de llamar a esta función al cargar la página
  
  document.querySelector('.button:first-child').addEventListener('click', function() {
    if (indiceActual > 0) {
      indiceActual--;
      fadeInAndUpdate();
    }
  });

    document.querySelector('.button:last-child').addEventListener('click', function() {
    if (indiceActual < datos.length - 1) {
      indiceActual++;
      fadeInAndUpdate();
    }
    });
  
