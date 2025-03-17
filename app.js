// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = []; // lista nombres 

// Función nombres lista 
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validación 
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Agregar el nombre 
    nombres.push(nombre);

    //  actualizada
    actualizarLista();

    // Limpiar 
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    
    nombres.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;

        // Crear botón de eliminar
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.classList.add("boton-eliminar");
        botonEliminar.onclick = function() {
            eliminarAmigo(index);
        };

        // Agregar el botón dentro del <li>
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    nombres.splice(index, 1); // Elimina el elemento del array
    actualizarLista(); // Actualiza la visualización
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    // Seleccionar un nombre aleatorio
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let nombreSorteado = nombres[indiceAleatorio];

    // Mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ¡El amigo sorteado es: <strong>${nombreSorteado}</strong>! 🎉</li>`;
    // Eliminar el nombre sorteado de la lista
    nombres.splice(indiceAleatorio, 1);

    // Actualizar la lista 
    actualizarLista();

}

