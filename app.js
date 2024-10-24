// Array de jugadores
const jugadores = [
    { id: 0, nombre: 'Nicolas Rondon', partidos: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { id: 1, nombre: 'Satanas Cantillo', partidos: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { id: 2, nombre: 'Sebastian Pitre', partidos: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 }
];

// Array de partidos
const partidos = [
    {
        partido: 1,
        jugador1: jugadores[0],  // Jugador 1
        jugador2: jugadores[1],  // Jugador 2
        golesJug1: 3,
        golesJug2: 2
    },
    {
        partido: 2,
        jugador1: jugadores[0],  // Jugador 3
        jugador2: jugadores[1],  // Jugador 4
        golesJug1: 2,
        golesJug2: 2
    },
    {
        partido: 3,
        jugador1: jugadores[0],  // Jugador 3
        jugador2: jugadores[2],  // Jugador 4
        golesJug1: 2,
        golesJug2: 0
    },
    {
        partido: 4,
        jugador1: jugadores[0],  // Jugador 3
        jugador2: jugadores[2],  // Jugador 4
        golesJug1: 1,
        golesJug2: 0
    }
];

// Función para actualizar la tabla de posiciones
function actualizarPosiciones() {
    partidos.forEach(partido => {
        const { jugador1, jugador2, golesJug1, golesJug2 } = partido;

        // Aumentar el número de partidos jugados
        jugador1.partidos++;
        jugador2.partidos++;

        // Determinar el resultado del partido
        if (golesJug1 > golesJug2) {
            jugador1.victorias++;
            jugador1.puntos += 3;
            jugador2.derrotas++;
        } else if (golesJug1 < golesJug2) {
            jugador2.victorias++;
            jugador2.puntos += 3;
            jugador1.derrotas++;
        } else {
            jugador1.empates++;
            jugador2.empates++;
            jugador1.puntos += 1;
            jugador2.puntos += 1;
        }
    });
}

// Función para renderizar la tabla de posiciones en el HTML
function renderizarTablaPosiciones() {
    const tablaBody = document.querySelector('#tabla-posiciones tbody');
    tablaBody.innerHTML = ''; // Limpiar la tabla antes de agregar nuevas filas

    jugadores.forEach(jugador => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td class="text-center">${jugador.nombre}</td>
            <td class="text-center">${jugador.partidos}</td>
            <td class="text-center">${jugador.victorias}</td>
            <td class="text-center">${jugador.empates}</td>
            <td class="text-center">${jugador.derrotas}</td>
            <td class="text-center">${jugador.puntos}</td>
        `;
        tablaBody.appendChild(fila);
    });
}

// Función principal para mostrar campeonato y tabla
function renderCampeonato() {
    const campeonatoDiv = document.getElementById('campeonato');
    
    partidos.forEach(partido => {
        // Crear los elementos HTML para cada partido
        const partidoDiv = document.createElement('div');

        partidoDiv.classList.add('col-6');  // Agregar la clase "col-3"
        partidoDiv.innerHTML = `
            <div class="card my-2 p-2 text-center" style="background-image: url('cancha.webp'); background-size: cover;background-repeat: no-repeat;">
                <h4 class="text-white">Partido ${partido.partido}</h4>
                <h5 class="text-white">${partido.jugador1.nombre} <span class="text-danger">vs</span> ${partido.jugador2.nombre}</h5>
                <h3 class="text-white">${partido.golesJug1} - ${partido.golesJug2}</h3>
            </div>
            
        `;

        // Agregar el partido al campeonato
        campeonatoDiv.appendChild(partidoDiv);
    });

    // Actualizar y renderizar la tabla de posiciones
    actualizarPosiciones();
    renderizarTablaPosiciones();
}

// Llamar a la función para mostrar los datos
renderCampeonato();
